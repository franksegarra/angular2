"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//Feature components and objects
var studentprofile_component_1 = require("./studentprofile.component");
//Application components and objects
// import { AcademicsModule } from '../academics/academics.module'
// import { AcademicsComponent } from '../academics/academics.component'
// import { LinksModule } from '../links/links.module'
// import { ContactMeModule } from '../contactme/contactme.module'
// import { ScheduleModule } from '../schedule/schedule.module'
// import { MyProfileModule } from '../profile/myprofile.module'
//Module declaration
var StudentProfileModule = (function () {
    function StudentProfileModule() {
    }
    return StudentProfileModule;
}());
StudentProfileModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot([{ path: 'studentprofile', component: studentprofile_component_1.StudentProfileComponent }])
        ],
        declarations: [studentprofile_component_1.StudentProfileComponent]
    })
], StudentProfileModule);
exports.StudentProfileModule = StudentProfileModule;
//# sourceMappingURL=studentProfile.module.js.map