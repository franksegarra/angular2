import { Component, Input, OnInit } from '@angular/core';

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