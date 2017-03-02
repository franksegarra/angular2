import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IVideo } from './IVideo';
import { TreeNode } from 'primeng/primeng';

import 'rxjs/add/operator/map';

//Global settings
import { Config } from '../../config.service';

@Injectable()
export class VideoService {

  public playlist:Array<IVideo> = [];
  public currentTitle:string = "loading...";
  public currentDesc:string = "A very nice video...";
  public videoElement:any;
  public videoData: TreeNode[];
  public selectedFile: TreeNode;

  public currentPath:string = "";
  public currentTime:number = 0;
  public totalTime:number = 0;
  public calculatedWidth:number;
  public calculatedScrubY:number;
  public isMuted:boolean = false;
  public isPlaying:boolean = false;
  public isDragging:boolean = false;
  public showDetails:boolean = false;

  constructor(private http:Http) {}

  appSetup(v:string) {
    this.videoElement = <HTMLVideoElement> document.getElementById(v);
    this.videoElement.addEventListener("loadedmetadata", this.updateData);
    this.videoElement.addEventListener("timeupdate", this.updateTime);
    window.setInterval(this.timerFired, 500);
  }

  getPlaylist(id:number) {
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

    var categories:Array<string> = this.uniqueCategories();
    var p:Array<IVideo> = this.playlist;
    var rootnodes:Array<TreeNode> = [];

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
            childnode.data = file.id
            childnode.expandedIcon = "";
            childnode.collapsedIcon = "";
            parent.children.push(childnode);
        });

        rootnodes.push(parent);
    });

    this.videoData = rootnodes;
  }

  uniqueCategories() {
    return this.playlist.map(function(e) { return e['category']; }).filter(function(e,i,a){
        return i === a.indexOf(e);
    });
  };

  selectedVideoById = (id:number) => {
      var file =  this.playlist.filter(function(e){return e.id == id;}) ;
      this.currentTitle = file[0]['title'];
      this.currentDesc = file[0]['description'];
      this.videoElement.src = Config.VIDEOFOLDER + file[0]['filename'];
      this.videoElement.pause();
      this.isPlaying = false;
  };

  selectedVideo = (i:number) => {
      this.currentTitle = this.playlist[i]['title'];
      this.currentDesc = this.playlist[i]['description'];
      this.videoElement.src = Config.VIDEOFOLDER + this.playlist[i]['filename'];
      this.videoElement.pause();
      this.isPlaying = false;
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
