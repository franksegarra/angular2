import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ConfirmationService } from 'primeng/primeng';

import { spDataService } from '../services/spdata.service';

@Component({
    selector: 'pp-header',
    moduleId: module.id,
    templateUrl: 'spheader.component.html'
})
export class SpHeaderComponent implements OnInit { 
    @Input() pageName: string;
    private errorMessage: string;
    private form: FormGroup;

    headerpopupvisible: boolean = false;
    headerpopuphdr: string = '';

    constructor(
        private fb: FormBuilder, 
        private _spDataService: spDataService, 
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
        this.headerpopuphdr = 'Please select the pages you want to include in your profile.';
        this.headerpopupvisible = true;
    }

    onCancel(): void { 
        this.confirmationService.confirm({
            message: 'Are you sure  you want to cancel?',
            header: 'Cancel Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.headerpopupvisible = false;        
            }
        });
    }

    onSubmit(): void { 
    }    
}