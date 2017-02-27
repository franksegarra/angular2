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
var Profile_1 = require("../models/Profile");
//Data service
var data_service_1 = require("../services/data.service");
var StudentProfileComponent = (function () {
    function StudentProfileComponent(_dataService) {
        this._dataService = _dataService;
        this.studentId = '1';
        this.componentToShow = 'videos';
    }
    StudentProfileComponent.prototype.ngOnInit = function () {
        this.myprofile = new Profile_1.Profile();
        this.myprofile.id = 1;
        this.myprofile.firstName = 'Francis';
        this.myprofile.lastName = 'Segarra';
        this.myprofile.primaryEmail = 'segarraf18@gmail.com';
        this.myprofile.graduationYear = 2018;
        this.myprofile.highSchoolName = 'Carmel High School';
        //this._dataService.getStudent(this.studentId).subscribe(p => this.studentprofile = p, error => this.errorMessage = <any>error);
    };
    //Controls which component is visible by setting componentToShow variable
    StudentProfileComponent.prototype.setVisibleComponent = function (visibleItem) {
        this.componentToShow = visibleItem;
    };
    return StudentProfileComponent;
}());
StudentProfileComponent = __decorate([
    core_1.Component({
        selector: 'pp-studentprofile',
        moduleId: module.id,
        templateUrl: 'studentprofile.component.html',
        styleUrls: ['studentprofile.component.css']
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], StudentProfileComponent);
exports.StudentProfileComponent = StudentProfileComponent;
//# sourceMappingURL=studentprofile.component.js.map