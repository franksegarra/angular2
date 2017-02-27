import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IVideo } from './IVideo';
import { VideoCategory } from './VideoCategory';

import 'rxjs/add/operator/map';


//Global settings
import { Config } from '../../config.service';

@Injectable()
export class VideoService {

  public videoElement:any;
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
  public playlist:Array<IVideo> = [];
  public categorylist:Array<VideoCategory> = [];

  constructor(private http:Http) {}

  appSetup(v:string) {
    this.videoElement = <HTMLVideoElement> document.getElementById(v);
    this.videoElement.addEventListener("loadedmetadata", this.updateData);
    this.videoElement.addEventListener("timeupdate", this.updateTime);
    window.setInterval(this.timerFired, 500);
  }

  gatherJSON(id:number) {
      this.http.get(Config.WEBSERVICESURL + 'studentvideos/GetByStudentId/' + id.toString())
          .map((res:Response) => <IVideo[]>res.json())
          .subscribe(
              data => {
                  this.playlist = data;
                  this.selectedVideo(1);
                  this.createVideoCategories();
              }
          );
  };

  createVideoCategories() {
    //console.log('Playlist: ' + JSON.stringify(this.playlist))

    //This is working.  Gets me all categories
    var categories:Array<string> = this.uniqueCategories();
    //console.log('Categories: ' + JSON.stringify(categories))

    var p:Array<IVideo> = this.playlist;
    var c:Array<VideoCategory> = [];

    categories.forEach(function(item) {
        //I see the category here
        //console.log('Category: ' + item)

        //But this fails
        var files = p.filter(function(e){return e.category == item;});

        var vidcategory: VideoCategory = new VideoCategory(item, files);
        c.push(vidcategory);
    });

    this.categorylist = c;
    //console.log('Categories: ' + JSON.stringify(this.categorylist))
  }

  getFiles(vidcategory: string):Array<IVideo> {
    return this.playlist.filter(function(e){return e.category == vidcategory;});
  };

  uniqueCategories() {
    return this.playlist.map(function(e) { return e['category']; }).filter(function(e,i,a){
        return i === a.indexOf(e);
    });
  };

  selectedVideo = (i:number) => {
      this.currentTitle = this.playlist[i]['title'];
      this.currentDesc = this.playlist[i]['description'];
      this.videoElement.src = Config.VIDEOFOLDER + this.playlist[i]['filename'];
      this.videoElement.pause();
      this.isPlaying = false;
      console.log('Video: ' + this.videoElement.src)
  };

  seekVideo(e:any) {
      var w = document.getElementById('progressMeterFull').offsetWidth;
      var d = this.videoElement.duration;
      var s = Math.round(e.pageX / w * d);
      this.videoElement.currentTime = s;
  };

  dragStart = function(e:any) {
      this.isDragging = true;
  };
  dragMove = function(e:any) {
      if(this.isDragging){
          this.calculatedWidth = e.x;
      }
  };
  dragStop = function(e:any) {
      if(this.isDragging){
          this.isDragging = false;
          this.seekVideo(e);
      }
  };

  muteVideo() {
      if(this.videoElement.volume == 0) {
          this.videoElement.volume = 1;
          this.isMuted = false;
      }else{
          this.videoElement.volume = 0;
          this.isMuted = true;
      }
  };

  playVideo() {
      if(this.videoElement.paused) {
          this.videoElement.play();
          this.isPlaying = true;
      }else{
          this.videoElement.pause();
          this.isPlaying = false;
      }
  };

  updateData = (e:any) => {
      this.totalTime = this.videoElement.duration;
  };
  updateTime = (e:any) => {
      this.currentTime = this.videoElement.currentTime;
  };

  timerFired = () => {
    if(!this.isDragging) {
      this.calculatedScrubY = this.videoElement.offsetHeight;
      var t = this.videoElement.currentTime;
      var d = this.videoElement.duration;
      this.calculatedWidth = (t / d * this.videoElement.offsetWidth);
    }
  };

  details() {
      if(this.showDetails == false){
          this.showDetails = true;
      }else{
          this.showDetails = false;
      }
  };

  fullScreen() {
      if(this.videoElement.requestFullscreen) {
          this.videoElement.requestFullscreen();
      }else if(this.videoElement.mozRequestFullScreen) {
          this.videoElement.mozRequestFullScreen();
      }else if(this.videoElement.webkitRequestFullscreen) {
          this.videoElement.webkitRequestFullscreen();
      }else if(this.videoElement.msRequestFullscreen) {
          this.videoElement.msRequestFullscreen();
      }
  };

}
