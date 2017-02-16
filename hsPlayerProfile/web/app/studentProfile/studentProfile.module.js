"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//routing setup
var app_routes_1 = require("../app.routes");
//Feature components
var academics_module_1 = require("../academics/academics.module");
var links_module_1 = require("../links/links.module");
var contactme_module_1 = require("../contactme/contactme.module");
var schedule_module_1 = require("../schedule/schedule.module");
var myprofile_module_1 = require("../profile/myprofile.module");
//Module declaration
var StudentProfileModule = (function () {
    function StudentProfileModule() {
    }
    return StudentProfileModule;
}());
StudentProfileModule = __decorate([
    core_1.NgModule({
        imports: [
            app_routes_1.Routing,
            academics_module_1.AcademicsModule,
            links_module_1.LinksModule,
            contactme_module_1.ContactMeModule,
            schedule_module_1.ScheduleModule,
            myprofile_module_1.MyProfileModule
        ],
        declarations: []
    })
], StudentProfileModule);
exports.StudentProfileModule = StudentProfileModule;
//# sourceMappingURL=studentprofile.module.js.map