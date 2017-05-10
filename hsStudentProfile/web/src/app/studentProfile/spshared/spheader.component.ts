import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { spDataService } from '../services/spdata.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { spUtilityService } from '../services/sputility.service';
import { ConfirmationService } from 'primeng/primeng';
import { Popup } from 'ng2-opd-popup';

@Component({
    selector: 'pp-header',
    moduleId: module.id,
    templateUrl: 'spheader.component.html',
    providers: [Popup]
})
export class SpHeaderComponent implements OnInit { 
    @Input() pageName: string;
    @ViewChild('headerPopup') popup: Popup;
    private errorMessage: string;
    private form: FormGroup;

    constructor(
        private fb: FormBuilder, 
        private _spDataService: spDataService, 
        private _spUtilityService: spUtilityService,
        private confirmationService: ConfirmationService
    ) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            "id": [null],
            "academics": [null],
            "videos":  [null],
            "pictures": [null],
            "schedule": [null],
            "links": [null],
            "stats":  [null]
        });
    };

    showPageSettings() {
        this._spUtilityService.showPopup(this.popup, "Please select the pages you want to include in your profile.");        
    }

    onCancel(): void { 
        this._spUtilityService.sCancel(this.popup, this.confirmationService);
    }

    onSubmit(): void { 
    }    
}