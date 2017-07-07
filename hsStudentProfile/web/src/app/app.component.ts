import { Component } from '@angular/core';

import { Config } from './config.service';
import { AuthService } from './services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = Config.MAIN_HEADING;

    constructor(
        private _authService: AuthService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

}
