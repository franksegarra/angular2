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
var data_service_1 = require("../services/data.service");
var MyProfileComponent = (function () {
    function MyProfileComponent(_dataService) {
        this._dataService = _dataService;
        this.pageTitle = "My Profile";
    }
    ;
    MyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getMyProfile()
            .subscribe(function (myprofile) { return _this.myprofile = myprofile; }, function (error) { return _this.errorMessage = error; });
    };
    ;
    MyProfileComponent.prototype.onSubmit = function (form) {
        console.log('you submitted value:', form);
    };
    ;
    return MyProfileComponent;
}());
MyProfileComponent = __decorate([
    core_1.Component({
        selector: 'pp-myprofile',
        moduleId: module.id,
        templateUrl: 'myprofile.component.html',
        styleUrls: ['myprofile.component.css']
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], MyProfileComponent);
exports.MyProfileComponent = MyProfileComponent;
//# sourceMappingURL=myprofile.component.js.map