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
var data_service_1 = require("../../services/data.service");
var LinksComponent = (function () {
    function LinksComponent(_dataService) {
        this._dataService = _dataService;
    }
    ;
    LinksComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Set page title
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Links';
        //Get data
        this._dataService.getLinks(this.myprofile.id).subscribe(function (links) { return _this.links = links; }, function (error) { return _this.errorMessage = error; });
    };
    ;
    return LinksComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LinksComponent.prototype, "myprofile", void 0);
LinksComponent = __decorate([
    core_1.Component({
        selector: 'pp-links',
        moduleId: module.id,
        templateUrl: 'links.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], LinksComponent);
exports.LinksComponent = LinksComponent;
//# sourceMappingURL=links.component.js.map