import { Component } from '@angular/core';
import { FileUpload } from 'primeng/primeng';
import { AuthService } from '../services/auth.service';

@Component({
    templateUrl: './about.component.html'
})
export class AboutComponent {
    public pageTitle: string = 'About Us';
    
    uploadedFiles: any[] = [];

    constructor(private _authService: AuthService) {
        //If we are not logged in as a user, then log in as guest and get the profile that was passed in
            this._authService.login('guest', 'guest')
                .subscribe(
                    (result)=> {},
                    (err) => {},
                    () => {}
                );
        }

    addRow() {
    }

    onBeforeSend(event) {
        console.log("onBeforeSend");
        console.log(event);
        console.log(this._authService.token);
        event.xhr.setRequestHeader('Authorization', 'Bearer ' + this._authService.token);
    }

 ClickButton(){
  }


}