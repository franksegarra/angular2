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
var GradeComponent = (function () {
    function GradeComponent() {
    }
    GradeComponent.prototype.ngOnInit = function () {
        //this.calculateAverage();
    };
    ;
    return GradeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], GradeComponent.prototype, "grade", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], GradeComponent.prototype, "classes", void 0);
GradeComponent = __decorate([
    core_1.Component({
        selector: 'pp-grade',
        moduleId: module.id,
        templateUrl: 'grade.component.html'
    })
], GradeComponent);
exports.GradeComponent = GradeComponent;
//# sourceMappingURL=grade.component.js.map