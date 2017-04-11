import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { spDataService } from '../services/spdata.service';

@Component({
    selector: 'pp-addbutton',
    moduleId: module.id,
    templateUrl: 'spAddButton.component.html'
})
export class AddButtonComponent { 
    @Input() itemToAdd: string;
    @Output() onAddRow = new EventEmitter();

    constructor(private _spDataService: spDataService) {}

    addRow() {
        this.onAddRow.emit();
    }
}