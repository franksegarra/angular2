import { Component} from '@angular/core';
import { Config } from './config.service';
import { AuthService } from './services/auth.service';

import * as $ from 'jquery';

@Component({
    selector: 'pm-app',
    moduleId: module.id,
    templateUrl:  'app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    pageTitle: string = Config.MAIN_HEADING;

    constructor(private authService: AuthService) {}
}