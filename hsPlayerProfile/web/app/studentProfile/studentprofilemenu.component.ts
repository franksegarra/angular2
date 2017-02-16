
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './studentprofilemenu.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentProfileMenuComponent {

  constructor(route: ActivatedRoute) {
      route.params.subscribe(params => console.log("side menu id parameter",params['id']));
  }

}

