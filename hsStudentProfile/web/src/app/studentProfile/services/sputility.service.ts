import { Injectable } from '@angular/core';
import { spDataService } from '../services/spdata.service';
import { AuthService } from '../../services/auth.service';
import { ConfirmationService } from 'primeng/primeng';
import { Popup } from 'ng2-opd-popup';

@Injectable()
export class spUtilityService {

    constructor(
        private _spDataService: spDataService, 
        private _authService: AuthService,
        private confirmationService: ConfirmationService, 
    ) {}

    Cancel(popup: Popup): void { 
        this.confirmationService.confirm({
            message: 'Are you sure  you want to cancel?',
            header: 'Cancel Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                popup.hide();
            }
        });
    }

    showPopup(popup: Popup, myheader:string) {

        popup.options = {
            header:myheader,
            color: "#326eb7", // red, blue.... 
            widthProsentage: 40, // The with of the popou measured by browser width 
            animationDuration: 0, // in seconds, 0 = no animation 
            showButtons: false, // You can hide this in case you want to use custom buttons 
            confirmBtnContent: "OK", // The text on your confirm button 
            cancleBtnContent: "Cancel", // the text on your cancel button 
            confirmBtnClass: "btn btn-default", // your class for styling the confirm button 
            cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
            animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
        };
    
        popup.show(popup.options);
    }
}
