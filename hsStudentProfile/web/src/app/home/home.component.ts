import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent {
    public pageTitle: string = 'Home';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService) { }

    ngOnInit(): void {
        console.log (this.router.url);
        if (this.router.url=='/home/logout')
        {
            this.authService.logout();
            this.router.navigate(['/home']);
        }
    }
}
