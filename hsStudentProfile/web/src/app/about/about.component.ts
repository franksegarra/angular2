import { Component } from '@angular/core';
import { FileUpload } from 'primeng/primeng';


@Component({
    templateUrl: './about.component.html'
})
export class AboutComponent {
    public pageTitle: string = 'About Us';
    
    uploadedFiles: any[] = [];

    onUpload(event) {
        for(let file of event.files) {
            console.log(file);
            this.uploadedFiles.push(file);
        }
    
    }


 ClickButton(){
  }


}