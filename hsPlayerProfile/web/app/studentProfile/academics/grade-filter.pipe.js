"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GradeFilterPipe = (function () {
    function GradeFilterPipe() {
    }
    GradeFilterPipe.prototype.transform = function (classes, conditions) {
        return classes.filter(function (aclass) {
            for (var field in conditions) {
                if (aclass[field] !== conditions[field]) {
                    return false;
                }
            }
            return true;
        });
    };
    return GradeFilterPipe;
}());
GradeFilterPipe = __decorate([
    core_1.Pipe({
        name: 'gradeFilter'
    })
], GradeFilterPipe);
exports.GradeFilterPipe = GradeFilterPipe;
//# sourceMappingURL=grade-filter.pipe.js.map