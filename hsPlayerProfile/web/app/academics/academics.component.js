"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AcademicsComponent = (function () {
    function AcademicsComponent() {
        this.pageTitle = "Academics";
        //	errorMessage: string;
        //	parclasses: IClass[];
        //    constructor(private _dataService: DataService) {
        //    }
        //
        //    ngOnInit(): void {
        //        this._dataService.getClasses()
        //            .subscribe(classes => this.parclasses = classes, error => this.errorMessage = <any>error);
        //    };
    }
    return AcademicsComponent;
}());
AcademicsComponent = __decorate([
    core_1.Component({
        selector: 'pp-academics',
        moduleId: module.id,
        templateUrl: 'academics.component.html',
        styleUrls: ['academics.component.css']
    })
], AcademicsComponent);
exports.AcademicsComponent = AcademicsComponent;
//# sourceMappingURL=academics.component.js.map