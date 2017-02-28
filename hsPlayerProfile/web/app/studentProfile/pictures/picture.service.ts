import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IPicture } from './IPicture';
import { PictureCategory } from './PictureCategory';

import 'rxjs/add/operator/map';

//Global settings
import { Config } from '../../config.service';

@Injectable()
export class PictureService {

  public picturelist:Array<IPicture> = [];
  public categorylist:Array<PictureCategory> = [];
  public pictureElement:any;

  public currentPath:string = "";
  public currentTitle:string = "loading...";
  public currentTime:number = 0;
  public totalTime:number = 0;
  public calculatedWidth:number;
  public calculatedScrubY:number;
  public isMuted:boolean = false;
  public isPlaying:boolean = false;
  public isDragging:boolean = false;
  public showDetails:boolean = false;
  public currentDesc:string = "A very nice video...";

  constructor(private http:Http) {}

  appSetup(v:string) {
    this.pictureElement = <HTMLImageElement> document.getElementById(v);
  }

  getPlaylist(id:number) {
      this.http.get(Config.WEBSERVICESURL + 'studentpictures/GetByStudentId/' + id.toString())
          .map((res:Response) => <IPicture[]>res.json())
          .do(data => console.log('All: ' + JSON.stringify(data)))
          .subscribe(
              data => {
                  this.picturelist = data;
                  this.selectedPicture(1);
                  this.createPictureCategories();
              }
          );
  };

  selectedPicture = (i:number) => {
      this.currentTitle = this.picturelist[i]['title'];
      this.currentDesc = this.picturelist[i]['description'];
      this.pictureElement.src = Config.PICTUREFOLDER + this.picturelist[i]['filename'];
      console.log('Video: ' + this.pictureElement.src)
  };

  selectedPictureById = (id:number) => {
      var file =  this.picturelist.filter(function(e){return e.id == id;}) ;
      this.currentTitle = file[0]['title'];
      this.currentDesc = file[0]['description'];
      this.pictureElement.src = Config.PICTUREFOLDER + file[0]['filename'];
      console.log('Video: ' + this.pictureElement.src);
  };

  createPictureCategories() {
    var categories:Array<string> = this.uniqueCategories();
    var p:Array<IPicture> = this.picturelist;
    var c:Array<PictureCategory> = [];

    categories.forEach(function(item) {
        var files = p.filter(function(e){return e.category == item;});
        var piccategory: PictureCategory = new PictureCategory(item, files);
        c.push(piccategory);
    });

    this.categorylist = c;
  }

  uniqueCategories() {
    return this.picturelist.map(function(e) { return e['category']; }).filter(function(e,i,a){
        return i === a.indexOf(e);
    });
  };

  details() {
      if(this.showDetails == false){
          this.showDetails = true;
      }else{
          this.showDetails = false;
      }
  };

  fullScreen() {
      if(this.pictureElement.requestFullscreen) {
          this.pictureElement.requestFullscreen();
      }else if(this.pictureElement.mozRequestFullScreen) {
          this.pictureElement.mozRequestFullScreen();
      }else if(this.pictureElement.webkitRequestFullscreen) {
          this.pictureElement.webkitRequestFullscreen();
      }else if(this.pictureElement.msRequestFullscreen) {
          this.pictureElement.msRequestFullscreen();
      }
  };

}
