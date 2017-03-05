import { Component, Input } from '@angular/core';

@Component({
    selector: 'pp-extracurricular',
    moduleId: module.id,
    templateUrl: 'extracurricular.component.html'
})
export class ExtraCurricularComponent { 
    @Input() myprofile: IProfile;
    @Input() ec: IExtraCurricular[];
}