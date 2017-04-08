import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

//Global settings
import { Config } from '../../config.service';

@Injectable()
export class spEditService {
    editMode: boolean = false;

    toggleEditMode() {
        this.editMode = !this.editMode;
    }
}