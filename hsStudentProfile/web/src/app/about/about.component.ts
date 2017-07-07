import { Component } from '@angular/core';
import { PictureUpload } from '../shared/pictureupload/pictureupload.component';

@Component({
    templateUrl: './about.component.html'
})
export class AboutComponent {
    public pageTitle: string = 'About Us';
    picturehdr: string = 'Add a new picture';
    picurl = "StudentPictures/PostPicture/";
}