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
var picture_service_1 = require("./picture.service");
var PictureTreeViewComponent = (function () {
    function PictureTreeViewComponent() {
    }
    return PictureTreeViewComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", picture_service_1.PictureService)
], PictureTreeViewComponent.prototype, "pictureservice", void 0);
PictureTreeViewComponent = __decorate([
    core_1.Component({
        selector: 'picture-tree-view',
        template: "\n        <ul>\n            <li *ngFor=\"let category of pictureservice.categorylist\">\n                <span (click)=\"category.toggle()\">{{ category.category }}</span>\n                <div *ngIf=\"category.expanded\">\n                    <ul >\n                        <li class=\"list-group-item\" *ngFor=\"let file of category.files\" (click)=\"pictureservice.selectedPictureById(file.id)\"> {{ file.title }} </li>\n                    </ul>\n                </div>\n            </li>\n        </ul>\n    "
    })
], PictureTreeViewComponent);
exports.PictureTreeViewComponent = PictureTreeViewComponent;
//# sourceMappingURL=picturetreeview.component.js.map