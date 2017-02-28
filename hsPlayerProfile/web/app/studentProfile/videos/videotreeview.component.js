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
var video_service_1 = require("./video.service");
var VideoTreeViewComponent = (function () {
    function VideoTreeViewComponent() {
    }
    return VideoTreeViewComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", video_service_1.VideoService)
], VideoTreeViewComponent.prototype, "videoservice", void 0);
VideoTreeViewComponent = __decorate([
    core_1.Component({
        selector: 'video-tree-view',
        template: "\n        <ul>\n            <li *ngFor=\"let category of videoservice.categorylist\">\n                <span (click)=\"category.toggle()\">{{ category.category }}</span>\n                <div *ngIf=\"category.expanded\">\n                    <ul >\n                        <li class=\"list-group-item\" *ngFor=\"let file of category.files\" (click)=\"videoservice.selectedVideoById(file.id)\"> {{ file.title }} </li>\n                    </ul>\n                </div>\n            </li>\n        </ul>\n    "
    })
], VideoTreeViewComponent);
exports.VideoTreeViewComponent = VideoTreeViewComponent;
//# sourceMappingURL=videotreeview.component.js.map