import { Component, OnInit } from '@angular/core';
import { IVideo } from './IVideo';
import { VideoService } from './video.service';
import { TreeNode } from 'primeng/primeng';
import { spDataService } from '../services/spdata.service';

@Component({
    selector: 'pp-videos',
    moduleId: module.id,
    templateUrl: 'videos.component.html',
    styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit { 
    pageName: string = 'Videos';

    constructor(public videoService:VideoService, private _spDataService:spDataService) {}

    ngOnInit(): void {
        this.videoService.appSetup("videoDisplay", this._spDataService.videolist);
    }

    nodeSelect(event: any) {
        var eventObj: TreeNode = event.node ;

        //No data.  Must be a category
        if (eventObj.data == "") { 
            eventObj.expanded = !eventObj.expanded;
            return;
        }

        var vid: IVideo = eventObj.data;
        if (vid.id.toString() != "")
        {
            this.videoService.selectedVideoById(vid.id);
            this.videoService.playVideo();
        }
    }
}