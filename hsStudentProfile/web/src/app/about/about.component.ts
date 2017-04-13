import { Component } from '@angular/core';
import {Popup} from 'ng2-opd-popup';

@Component({
    templateUrl: './about.component.html'
})
export class AboutComponent {
constructor(private popup:Popup) { }

    public pageTitle: string = 'About Us';

 ClickButton(){
    this.popup.show();
  }

}