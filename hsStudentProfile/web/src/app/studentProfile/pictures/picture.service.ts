import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IPicture } from './IPicture';
import { TreeNode } from 'primeng/primeng';
import { IProfilePictures } from '../../models/IProfilePictures';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

//Global settings
import { Config } from '../../config.service';

@Injectable()
export class PictureService {

    public picturelist:Array<IPicture> = [];
    public currentTitle:string = "loading...";
    public currentDesc:string = "A very nice video...";
    public pictureElement:any;
    public pictureData: TreeNode[];
    public selectedFile: TreeNode;
    public showDetails:boolean = false;
    public selectedPictureId: number;
    public profilepics: IProfilePictures[];

    constructor(private http:Http) {}

    appSetup(v:string, _profilepics: IProfilePictures[]) {
        this.pictureElement = <HTMLImageElement> document.getElementById(v);
        this.profilepics = _profilepics;
    }

    getPlaylist(id:number) {

        //Test to see if we already have data for this object
        if (this.picturelist.length > 0) {
            this.selectedPictureById(this.selectedPictureId);
            return;
        }

        this.http.get(Config.WEBSERVICESURL + 'studentpictures/GetByStudentId/' + id.toString())
        .map((res:Response) => <IPicture[]>res.json())
        .do(data => console.log('getPlaylist: ' + JSON.stringify(data)))
        .subscribe(
            data => {
                this.picturelist = data;
                this.createPictureCategories();
                this.selectedPicture(1);
            }
        );
    };

    createPictureCategories() {

        //If we use a picture for on the academics or stats pages, don't include them in the list
        var picstoexclude: IProfilePictures[] = this.profilepics;

        //If we find the items remove them
        for(var pe = 0; pe < picstoexclude.length;  pe++) {
            var len:number = this.picturelist.length - 1;
            for(var i = len; i >= 0; i--) {
                if (picstoexclude[pe].pictureid === this.picturelist[i].id)
                    this.picturelist.splice(i, 1);
            }
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

    selectedPicture = (i:number) => {
        this.selectedPictureId = this.picturelist[i]['id']
        this.currentTitle = this.picturelist[i]['title'];
        this.currentDesc = this.picturelist[i]['description'];
        this.pictureElement.src = Config.PICTUREFOLDER + this.picturelist[i]['filename'];
    };

    selectedPictureById = (id:number) => {
        var file =  this.picturelist.filter(function(e){return e.id == id;}) ;
        this.selectedPictureId = file[0]['id'];
        this.currentTitle = file[0]['title'];
        this.currentDesc = file[0]['description'];
        this.pictureElement.src = Config.PICTUREFOLDER + file[0]['filename'];
    };
}
