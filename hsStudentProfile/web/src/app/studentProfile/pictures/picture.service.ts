import {Injectable} from '@angular/core';
import { IPicture } from './IPicture';
import { TreeNode } from 'primeng/primeng';
import { IProfilePictures } from '../../models/IProfilePictures';
import 'rxjs/add/operator/map';

//Global settings
import { Config } from '../../config.service';

@Injectable()
export class PictureService {

    public picturelist:Array<IPicture> = [];
    public currentTitle:string = "loading...";
    public currentDesc:string = "A very nice video...";
    public pictureElement:any;
    public pictureData: TreeNode[];
    public selectedPictureId: number;
    public profilepics: IProfilePictures[];
    public selectedFile: TreeNode;

    appSetup(v:string, _profilepics: IProfilePictures[], _picturelist:Array<IPicture>) {
        this.pictureElement = <HTMLImageElement> document.getElementById(v);
        this.profilepics = _profilepics;
        this.picturelist = _picturelist;
        this.reBuildTree();
        this.selectFirstPicture();
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
            var parent: TreeNode = [];
            var files = p.filter(function(e){return e.category == item;});

            parent.label = item;
            parent.data = "";
            parent.expandedIcon = "";
            parent.collapsedIcon = "";
            parent.children = [];
        
            files.forEach(function(file) {
                var childnode: TreeNode = [];
                childnode.label = file.title
                childnode.data = file
                childnode.expandedIcon = "";
                childnode.collapsedIcon = "";
                parent.children.push(childnode);
            });

            rootnodes.push(parent);
        });

        this.pictureData = rootnodes;
    }

    findNextPictureInTree(file: IPicture) : number {
        var cat = file.category;
        var picid = file.id;

        console.log(cat + ':' + picid);

        this.pictureData.forEach(function(item) {
            if (item.label == cat) {
                var len:number = item.children.length - 1;
                for(var i = 0; i <= len; i++) {

                    console.log( i + ':' + len + ':' + item.children.length + ':' + item.children[i].data.id);

                    if (item.children[i].data.id == picid) {
                        //We are the only item in the category.  Set node to first picture in tree
                        if (i==0 && item.children.length == 1) {
                            console.log('Case1: ' + (i==0 && item.children.length == 1));
                            return 0;
                        }
                        //There are items after us in tree.  Return the next item
                        else if(item.children.length != 1 && i < len) {
                            var retid:number = item.children[i+1].data.id;
                            console.log('Case2: ' + retid + ': ' + (item.children.length != 1 && i < len));
                            return retid;
                        }
                        //We must be on last item in list.  Return the previous item
                        else if(item.children.length != 1 && i == len){
                            console.log('Case3: ' + (item.children.length != 1 && i == len));
                            var retid:number = item.children[i-1].data.id;
                            return retid;
                        }
                        else {
                            console.log('Case4');
                            return 0;
                        }
                    }
                }
            }
        });
        return 0;
    }

    selectFirstPicture() {
        //Get first leaf node
        var firstPic: TreeNode = this.pictureData[0].children[0];

        //Dont think I need these
        this.selectedPictureId = firstPic.data.id;                                  //['id']
        this.currentTitle = firstPic.data.title;                                    //['title'];
        this.currentDesc = firstPic.data.description;                               //['description'];
        
        this.pictureElement.src = Config.PICTUREFOLDER + firstPic.data.filename;    // ['filename'];
        this.pictureData[0].expanded = true;
        this.selectedFile = this.pictureData[0].children[0];
    };

    selectedPictureById (id:number) {
        var file =  this.picturelist.filter(function(e){return e.id == id;});

        //Don't think I need these
        this.selectedPictureId = file[0]['id'];
        this.currentTitle = file[0]['title'];
        this.currentDesc = file[0]['description'];

        this.pictureElement.src = Config.PICTUREFOLDER + file[0]['filename'];

        let nextpic:number = this.findNextPictureInTree(file[0]);
        console.log(this.findNextPictureInTree(file[0]));
    };

    removePictureById(id:number) {
        var file =  this.picturelist.filter(function(e){return e.id == id;});
        console.log(file);

        this.removeItemFromPictureList(id);

        //Rebuild tree
        this.reBuildTree();
    };

    removeItemFromPictureList(id:number){
        var len:number = this.picturelist.length - 1;
        for(var i = len; i >= 0; i--) {
            if (this.picturelist[i].id == id)
                this.picturelist.splice(i, 1);
        }
    }



}
