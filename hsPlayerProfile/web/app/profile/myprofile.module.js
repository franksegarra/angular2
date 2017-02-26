"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//External Modules
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_module_1 = require("../shared/shared.module");
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Feature components and objects
var myprofile_component_1 = require("./myprofile.component");
//Module declaration
var MyProfileModule = (function () {
    function MyProfileModule() {
    }
    return MyProfileModule;
}());
MyProfileModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([{ path: 'profile', component: myprofile_component_1.MyProfileComponent }])
        ],
        declarations: [myprofile_component_1.MyProfileComponent],
    })
], MyProfileModule);
exports.MyProfileModule = MyProfileModule;
//# sourceMappingURL=myprofile.module.js.map