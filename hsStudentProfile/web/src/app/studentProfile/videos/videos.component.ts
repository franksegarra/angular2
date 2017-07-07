import { Component, OnInit, ViewChild } from '@angular/core';
import { IVideo } from './IVideo';
import { VideoService } from './video.service';
import { TreeNode } from 'primeng/primeng';
import { spDataService } from '../services/spdata.service';
import { SecurePipe } from '../../pipes/secure.pipe';
import { PictureUpload } from '../../shared/pictureupload/pictureupload.component';

@Component({
    selector: 'pp-videos',
    moduleId: module.id,
    templateUrl: 'videos.component.html',
    styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit { 
    @ViewChild(PictureUpload) private picUpload: PictureUpload;
    pageName: string = 'Videos';
    selectedVideo: IVideo;
    addvideopopupvisible: boolean = false;
    addvideopopuphdr: string = 'Add a new Video';
    addvideourl: string = 'StudentVideos/PostVideo/';

    constructor(public videoService:VideoService, private _spDataService:spDataService) {}

    ngOnInit(): void {
        this.refreshData();
    }

    nodeSelect(event: any) {
        //No data.  Must be a category
        if (this.videoService.selectedFile.data == "") {
            return;
        }

        this.selectedVideo = this.videoService.selectedFile.data;
        if (this.selectedVideo.toString() != "")
        {
            this.videoService.selectedVideoById(this.selectedVideo.id);
            this.videoService.playVideo();
        }
    }

    onAddVideo(){        
        this.addvideopopupvisible = true;       
        this.picUpload.clearQueue();
    }

    onUploadComplete(event) {
        this.refreshData();
        this.addvideopopupvisible = false;
    }

    onDeleteVideo(){        
        //No data.  Must be a category
        if (this.selectedVideo == null) {
             return;
        }

        if (this.selectedVideo.id.toString() != "")
        {
            //console.log(this.selectedPic.id);
            this._spDataService.deleteVideo(this.selectedVideo.id)
            .subscribe(
                (response) => {
                    this.videoService.removeVideoById(this.selectedVideo.id);
                    this.selectedVideo = this.videoService.selectedFile.data;
                    this.videoService.selectedVideoById(this.selectedVideo.id);
                },
                (err) => {console.log("ERROR in deleteRow: Delete: "+ err);},
                () => {}
            );
        }
       
    }

    refreshData(){
        this._spDataService.getVideos(this._spDataService.myprofile.id)
            .subscribe(
                (vidlist) => { 
                    this._spDataService.videolist = vidlist;
                    this.videoService.appSetup("videoDisplay", this._spDataService.videolist);
                }, 
                (error) => {
                    console.error('error in video.component.ts');
                    console.error(error);
                }
            );
    }

}