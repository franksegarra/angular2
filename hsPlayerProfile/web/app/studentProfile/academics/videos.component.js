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
var VideosComponent = (function () {
    function VideosComponent() {
    }
    // errorMessage: string;
    // cinfo: IContactMe;
    // Bring this back when we implement the post
    // constructor(private _dataService: DataService) {
    // };
    VideosComponent.prototype.ngOnInit = function () {
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Videos';
    };
    VideosComponent.prototype.onSubmit = function (form) {
        console.log('you submitted value:', form);
    };
    ;
    return VideosComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VideosComponent.prototype, "myprofile", void 0);
VideosComponent = __decorate([
    core_1.Component({
        selector: 'pp-videos',
        moduleId: module.id,
        templateUrl: 'videos.component.html'
    })
], VideosComponent);
exports.VideosComponent = VideosComponent;
//# sourceMappingURL=videos.component.js.map