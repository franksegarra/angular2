import { Component, OnInit} from '@angular/core';
import { Config } from './config.service';
import { AuthService } from './services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

import * as $ from 'jquery';

@Component({
    selector: 'pm-app',
    moduleId: module.id,
    templateUrl:  'app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    pageTitle: string = Config.MAIN_HEADING;
    curUserLink: string;

    constructor(
        private _authService: AuthService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {

        this.router.navigate(['about']);

/*        this._authService.login('francissegarra', 'francissegarra')
            .subscribe(
                (result)=> {
                    if (result === true) {
                        if (this._authService.role == 'student') {
                            this.router.navigate([this._authService.curUserLink]);
                            console.log('Successfully logged in: ' + this._authService.curUserLink);
                        }
                        else {
                            console.log('AppComponent: Error loggin in');
                        }
                    } else {
                        console.log('AppComponent: Error loggin in');
                    }
                },
                (err) => {console.log('AppComponent: Error loggin in');},
                () => {}
            );
*/
    }
}