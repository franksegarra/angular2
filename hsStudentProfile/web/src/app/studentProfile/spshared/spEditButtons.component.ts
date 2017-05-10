import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { spDataService } from '../services/spdata.service';
import { ConfirmationService } from 'primeng/primeng';

@Component({
    selector: 'pp-editButtons',
    moduleId: module.id,
    templateUrl: 'spEditButtons.component.html'
})
export class EditButtonsComponent { 
    @Input() idField: string;
    @Output() onEditRow = new EventEmitter<number>();
    @Output() onDeleteRow = new EventEmitter<number>();

    constructor(private _spDataService: spDataService, private confirmationService: ConfirmationService) {}

    editRow(id:number) {
        this.onEditRow.emit(id);
    }

    deleteRow(id:number) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.onDeleteRow.emit(id);
            }
        });
    }
}