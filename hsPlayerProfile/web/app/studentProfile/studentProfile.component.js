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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//Data service
var data_service_1 = require("../services/data.service");
var stats_service_1 = require("./stats/stats.service");
var StudentProfileComponent = (function () {
    function StudentProfileComponent(route, _dataService, _statsService) {
        this.route = route;
        this._dataService = _dataService;
        this._statsService = _statsService;
        this.studentId = 1;
        this.componentToShow = 'contactme';
    }
    StudentProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // (+) converts string 'id' to a number
        this.sub = this.route.params.subscribe(function (params) { _this.studentId = +params['id']; });
        //Main Profile and stats profile.  Get these first
        this._dataService.getProfile(this.studentId).subscribe(function (p) { return _this.myprofile = p; }, function (error) { return _this.errorMessage = error; });
        this._statsService.getBBProfile(this.studentId).subscribe(function (p) { return _this.bbprofile = p[0]; }, function (error) { return _this.errorMessage = error; });
        //this._dataService.getProfileByName('francissegarra').subscribe(p => this.myprofile = p, error => this.errorMessage = <any>error);
        //For Academics
        this._dataService.getClasses(this.studentId).subscribe(function (classes) { return _this.classes = classes; }, function (error) { return _this.errorMessage = error; });
        this._dataService.getExtraCurricular(this.studentId).subscribe(function (classes) { return _this.ec = classes; }, function (error) { return _this.errorMessage = error; });
        //For Schedule
        this._dataService.getSchedule(this.studentId).subscribe(function (schedItems) { return _this.schedItems = schedItems; }, function (error) { return _this.errorMessage = error; });
        //Links
        this._dataService.getLinks(this.studentId).subscribe(function (links) { return _this.links = links; }, function (error) { return _this.errorMessage = error; });
        //Stats
        this._statsService.getHittingList(this.studentId);
        //profilepics
        this._dataService.getProfilePictures(this.studentId).subscribe(function (pics) { return _this.profilepics = pics; }, function (error) { return _this.errorMessage = error; });
    };
    StudentProfileComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
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
        templateUrl: 'studentprofile.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, data_service_1.DataService, stats_service_1.StatsService])
], StudentProfileComponent);
exports.StudentProfileComponent = StudentProfileComponent;
//# sourceMappingURL=studentprofile.component.js.map