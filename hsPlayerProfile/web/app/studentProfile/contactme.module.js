"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//External Modules
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
//Feature components and objects
var contactme_component_1 = require("./contactme.component");
//Module declaration
var ContactMeModule = (function () {
    function ContactMeModule() {
    }
    return ContactMeModule;
}());
ContactMeModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
        ],
        declarations: [contactme_component_1.ContactMeComponent]
    })
], ContactMeModule);
exports.ContactMeModule = ContactMeModule;
//# sourceMappingURL=contactme.module.js.map