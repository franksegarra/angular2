"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    // errorMessage: string;
    // Bring this back when we implement the post
    // constructor(private _dataService: DataService) {
    // };
    ProfileComponent.prototype.ngOnInit = function () {
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'About Me';
    };
    return ProfileComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProfileComponent.prototype, "myprofile", void 0);
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'pp-profile',
        moduleId: module.id,
        templateUrl: 'profile.component.html'
    })
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map