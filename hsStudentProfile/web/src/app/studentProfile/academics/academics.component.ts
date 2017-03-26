import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { IClass } from '../../models/IClass';
import { IExtraCurricular } from '../../models/IExtraCurricular';

@Component({
    selector: 'pp-academics',
    moduleId: module.id,
    templateUrl: 'academics.component.html'
})
export class AcademicsComponent implements OnInit { 
    @Input() myprofile: IProfile;
    @Input() classes: IClass[];
    @Input() ec: IExtraCurricular[];
    pageTitle: string;

    ngOnInit(): void {
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Academics';
    }
}