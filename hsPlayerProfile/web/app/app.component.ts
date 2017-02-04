import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class = 'nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Products</a></li>
                    <li><a [routerLink]="['/photos']">Photo Galleries</a></li>
                    <li><a [routerLink]="['/videos']">Video Galleries</a></li>
                    <li><a [routerLink]="['/stats']">Stats</a></li>
                    <li><a [routerLink]="['/academics']">Academics</a></li>
                    <li><a [routerLink]="['/links']">Links</a></li>
                    <li><a [routerLink]="['/contactme']">Contact Me</a></li>
                    <li><a [routerLink]="['/schedule']">Schedule</a></li>
                    <li><a [routerLink]="['/profile']">My Profile</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
    </div>
    `
})
export class AppComponent {
    pageTitle: string = 'High School Player Profiles'
}