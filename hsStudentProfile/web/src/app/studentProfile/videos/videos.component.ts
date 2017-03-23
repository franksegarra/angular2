import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { IVideo } from './IVideo';
import { VideoService } from './video.service';
import { TreeNode } from 'primeng/primeng';

@Component({
    selector: 'pp-videos',
    moduleId: module.id,
    templateUrl: 'videos.component.html',
    styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit { 
    @Input() myprofile: IProfile;
    @Input() videolist:Array<IVideo>;
    pageTitle: string;

    constructor(public videoService:VideoService) {}

    ngOnInit(): void {
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Videos';
        this.videoService.appSetup("videoDisplay", this.videolist);
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