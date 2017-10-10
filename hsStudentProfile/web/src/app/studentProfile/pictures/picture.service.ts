import {Injectable} from '@angular/core';
import { IPicture } from './IPicture';
import { TreeNode } from 'primeng/primeng';
import { IProfilePictures } from '../../models/IProfilePictures';
import 'rxjs/add/operator/map';

//Global settings
import { Config } from '../../config.service';

@Injectable()
export class PictureService {
    //Source data from database
    public picturelist:Array<IPicture> = [];
    //Tree nodes
    public pictureData: TreeNode[];
    //Id of currently selected node
    public selectedPictureId: number;
    //Profile Pictures to exclude
    public profilepics: IProfilePictures[];
    //Two way bound variable to currently selected node
    public selectedFile: TreeNode;

    appSetup(v:string, _profilepics: IProfilePictures[], _picturelist:Array<IPicture>) {
        this.profilepics = _profilepics;
        this.picturelist = _picturelist;
        this.reBuildTree();
        this.selectPicture(0);
    }

    reBuildTree() {

        //If we use a picture for on the academics or stats pages, don't include them in the list
        var picstoexclude: IProfilePictures[] = this.profilepics;

        //If we find the items remove them
        for(var pe = 0; pe < picstoexclude.length;  pe++) {
            this.removeItemFromPictureList(picstoexclude[pe].pictureid);
        }

        var categories:Array<string> = this.picturelist.map(function(e) { return e['category']; }).filter(function(e,i,a){return i === a.indexOf(e);});
        var p:Array<IPicture> = this.picturelist;
        var rootnodes:Array<TreeNode> = [];

        //For each category
        categories.forEach(function(item) {
            var parent: TreeNode = 
                {
                    label: item,
                    data: "",
                    expandedIcon: "",
                    collapsedIcon: "",
                    children: []
                };

            // parent.label = item;
            // parent.data = "";
            // parent.expandedIcon = "";
            // parent.collapsedIcon = "";
            // parent.children = [];
        
            var files = p.filter(function(e){return e.category == item;});
            files.forEach(function(file) {
                var childnode: TreeNode[] = [
                    {
                        label: file.title,
                        data: file,
                        expandedIcon: "",
                        collapsedIcon: "",
                        children: []
                    }
                ];

                parent.children.push(childnode[0]);
                
                // ; // = [];
                // childnode.label = file.title
                // childnode.data = file
                // childnode.expandedIcon = "";
                // childnode.collapsedIcon = "";
                //parent.children.push(childnode[0]);
            });

            rootnodes.push(parent[0]);
        });

        this.pictureData = rootnodes;
    };

    findNextPictureInTree(file: IPicture) : number {
        var cat = file.category;
        var picid = file.id;
        var catlen:number = this.pictureData.length - 1;

        for(var clen = 0; clen <= catlen; clen++) {
            if (this.pictureData[clen].label == cat) {
                var item:TreeNode = this.pictureData[clen];
                var len:number = item.children.length - 1;
                for(var i = 0; i <= len; i++) {

                    //console.log( i + ':' + len + ':' + item.children.length + ':' + item.children[i].data.id);

                    if (item.children[i].data.id == picid) {
                        //We are the only item in the category.  Set node to first picture in tree
                        if (i==0 && item.children.length == 1) {
                            //console.log('Case1: ' + (i==0 && item.children.length == 1));
                            return 0;
                        }
                        //There are items after us in tree.  Return the next item
                        else if(item.children.length != 1 && i < len) {
                            var retid:number = item.children[i+1].data.id;
                            //console.log('Case2: ' + retid + ': ' + (item.children.length != 1 && i < len));
                            return retid;
                        }
                        //We must be on last item in list.  Return the previous item
                        else if(item.children.length != 1 && i == len){
                            var retid:number = item.children[i-1].data.id;
                            //console.log('Case3: ' + retid + ': ' + (item.children.length != 1 && i == len));
                            return retid;
                        }
                        else {
                            //console.log('Case4');
                            return 0;
                        }
                    }
                }
            }
        }
        return 0;
    }

    selectPicture(id:number) {
        if (id==0){
            //Get first leaf node
            var firstPic: TreeNode = this.pictureData[0].children[0];
            this.selectedPictureId = firstPic.data.id; 
            this.pictureData[0].expanded = true;
            this.selectedFile = this.pictureData[0].children[0];
        }
        else {
            var file =  this.picturelist.filter(function(e){return e.id == id;});
            var cat = file[0].category;
            var catlen:number = this.pictureData.length - 1;
            this.selectedPictureId = file[0].id;

            for(var clen = 0; clen <= catlen; clen++) {
                if (this.pictureData[clen].label == cat) {
                    //Expand Node
                    this.pictureData[clen].expanded = true;

                    //Find picture
                    var item:TreeNode = this.pictureData[clen];
                    var len:number = item.children.length - 1;
                    for(var i = 0; i <= len; i++) {
                        if (item.children[i].data.id == this.selectedPictureId) {
                            this.selectedFile = item.children[i];
                        }
                    }
                }
            }
        }
    };

    removePictureById(id:number) {
        var file =  this.picturelist.filter(function(e){return e.id == id;});
        let nextpic = this.findNextPictureInTree(file[0]);
        this.removeItemFromPictureList(id);
        this.reBuildTree();
        this.selectPicture(nextpic);
    }

    removeItemFromPictureList(id:number){
        var len:number = this.picturelist.length - 1;
        for(var i = len; i >= 0; i--) {
            if (this.picturelist[i].id == id)
                this.picturelist.splice(i, 1);
        }
    }
}
