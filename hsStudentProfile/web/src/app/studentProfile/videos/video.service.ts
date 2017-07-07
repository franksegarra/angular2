import {Injectable} from '@angular/core';
import { IVideo } from './IVideo';
import { TreeNode } from 'primeng/primeng';
import 'rxjs/add/operator/map';

//Global settings
import { Config } from '../../config.service';

@Injectable()
export class VideoService {

    public playlist:Array<IVideo>;
    public currentTitle:string = "loading...";
    public currentDesc:string = "A very nice video...";
    public videoElement:any;
    public videoData: TreeNode[];
    public selectedFile: TreeNode = [];
    public currentTime:number = 0;
    public totalTime:number = 0;
    public calculatedWidth:number;
    public calculatedScrubY:number;
    public isMuted:boolean = false;
    public isPlaying:boolean = false;
    public isDragging:boolean = false;
    public showDetails:boolean = false;
    public selectedVideoId: number;
    public url: string = Config.WEBSERVICESURL + 'video/0';

    setImageId(id:number) {
        this.url = Config.WEBSERVICESURL + 'video/' + id;
        console.log(this.url);
    }

    appSetup(v:string, _videolist:Array<IVideo>) {
        this.videoElement = <HTMLVideoElement> document.getElementById(v);
        this.playlist = _videolist;
        this.selectedVideo(1);
        this.reBuildTree();
        this.videoElement.addEventListener("loadedmetadata", this.updateData);
        this.videoElement.addEventListener("timeupdate", this.updateTime);
        window.setInterval(this.timerFired, 500);
        this.soundOff();
    };

    reBuildTree() {
        var categories:Array<string> = this.playlist.map(function(e) { return e['category']; }).filter(function(e,i,a){return i === a.indexOf(e);});
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
                childnode.data = file
                childnode.expandedIcon = "";
                childnode.collapsedIcon = "";
                parent.children.push(childnode);
            });

            rootnodes.push(parent);
        });

        this.videoData = rootnodes;
    };

    selectedVideoById = (id:number) => {
        var file =  this.playlist.filter(function(e){return e.id == id;}) ;
        this.selectedVideoId = file[0]['id'];
        this.currentTitle = file[0]['title'];
        this.currentDesc = file[0]['description'];
        this.setImageId(this.selectedVideoId);
        this.videoElement.src = this.url;
        this.videoElement.pause();
        this.isPlaying = false;
    };

    selectedVideo = (i:number) => {
        console.log("Selected Video: " + i);
        this.selectedVideoId = this.playlist[i]['id'];
        this.currentTitle = this.playlist[i]['title'];
        this.currentDesc = this.playlist[i]['description'];
        this.setImageId(this.selectedVideoId);
        this.videoElement.src = this.url;
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
            this.soundOn();
        }else{
            this.soundOff();
        }
    };

    soundOff() {
        this.videoElement.volume = 0;
        this.isMuted = true;
    };

    soundOn() {
        this.videoElement.volume = 1;
        this.isMuted = false;
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

    removeVideoById(id:number) {
        var file =  this.playlist.filter(function(e){return e.id == id;});
        let nextpic = this.findNextVideoInTree(file[0]);
        this.removeItemFromVideoList(id);
        this.reBuildTree();
        this.selectVideo(nextpic);
    }

    findNextVideoInTree(file: IVideo) : number {
        var cat = file.category;
        var vidid = file.id;
        var catlen:number = this.videoData.length - 1;

        for(var clen = 0; clen <= catlen; clen++) {
            if (this.videoData[clen].label == cat) {
                var item:TreeNode = this.videoData[clen];
                var len:number = item.children.length - 1;
                for(var i = 0; i <= len; i++) {

                    //console.log( i + ':' + len + ':' + item.children.length + ':' + item.children[i].data.id);

                    if (item.children[i].data.id == vidid) {
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

    removeItemFromVideoList(id:number){
        var len:number = this.playlist.length - 1;
        for(var i = len; i >= 0; i--) {
            if (this.playlist[i].id == id)
                this.playlist.splice(i, 1);
        }
    }

    selectVideo(id:number) {
        if (id==0){
            //Get first leaf node
            var firstPic: TreeNode = this.videoData[0].children[0];
            this.selectedVideoId = firstPic.data.id; 
            this.videoData[0].expanded = true;
            this.selectedFile = this.videoData[0].children[0];
        }
        else {
            var file =  this.playlist.filter(function(e){return e.id == id;});
            var cat = file[0].category;
            var catlen:number = this.videoData.length - 1;
            this.selectedVideoId = file[0].id;

            for(var clen = 0; clen <= catlen; clen++) {
                if (this.videoData[clen].label == cat) {
                    //Expand Node
                    this.videoData[clen].expanded = true;

                    //Find picture
                    var item:TreeNode = this.videoData[clen];
                    var len:number = item.children.length - 1;
                    for(var i = 0; i <= len; i++) {
                        if (item.children[i].data.id == this.selectedVideoId) {
                            this.selectedFile = item.children[i];
                        }
                    }
                }
            }
        }
    };


}
