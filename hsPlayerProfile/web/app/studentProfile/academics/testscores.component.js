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
var config_service_1 = require("../../config.service");
var TestScoresComponent = (function () {
    function TestScoresComponent() {
    }
    TestScoresComponent.prototype.ngOnInit = function () {
        this.profilePicUrl = config_service_1.Config.PICTUREFOLDER + this.myprofile.profilepicturefilename;
    };
    return TestScoresComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TestScoresComponent.prototype, "myprofile", void 0);
TestScoresComponent = __decorate([
    core_1.Component({
        selector: 'pp-testscores',
        moduleId: module.id,
        templateUrl: 'testscores.component.html'
    })
], TestScoresComponent);
exports.TestScoresComponent = TestScoresComponent;
//# sourceMappingURL=testscores.component.js.map