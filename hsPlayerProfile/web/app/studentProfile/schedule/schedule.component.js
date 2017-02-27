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
var data_service_1 = require("../../services/data.service");
var ScheduleComponent = (function () {
    function ScheduleComponent(_dataService) {
        this._dataService = _dataService;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Set page title
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + "Where I'll be";
        //Get data
        this._dataService.getSchedule().subscribe(function (schedItems) { return _this.schedItems = schedItems; }, function (error) { return _this.errorMessage = error; });
    };
    ;
    return ScheduleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ScheduleComponent.prototype, "myprofile", void 0);
ScheduleComponent = __decorate([
    core_1.Component({
        selector: 'pp-schedule',
        moduleId: module.id,
        templateUrl: 'schedule.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], ScheduleComponent);
exports.ScheduleComponent = ScheduleComponent;
//# sourceMappingURL=schedule.component.js.map