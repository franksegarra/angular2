import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
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
    pageTitle: string;

    constructor(public videoService:VideoService) {}

    ngOnInit(): void {
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Videos';
        this.videoService.appSetup("videoDisplay");
        this.videoService.getPlaylist( this.myprofile.id );
    }

    nodeSelect(event: any) {
        var eventObj: TreeNode = event;
        console.log(eventObj.data);
        if (this.videoService.selectedFile.data != "")
        {
            this.videoService.selectedVideoById(this.videoService.selectedFile.data);
        }
    }
}