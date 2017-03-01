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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
//Global settings
var config_service_1 = require("../../config.service");
var PictureService = (function () {
    function PictureService(http) {
        var _this = this;
        this.http = http;
        this.picturelist = [];
        this.currentTitle = "loading...";
        this.currentDesc = "A very nice video...";
        this.showDetails = false;
        this.selectedPicture = function (i) {
            _this.currentTitle = _this.picturelist[i]['title'];
            _this.currentDesc = _this.picturelist[i]['description'];
            _this.pictureElement.src = config_service_1.Config.PICTUREFOLDER + _this.picturelist[i]['filename'];
            console.log('Video: ' + _this.pictureElement.src);
        };
        this.selectedPictureById = function (id) {
            var file = _this.picturelist.filter(function (e) { return e.id == id; });
            _this.currentTitle = file[0]['title'];
            _this.currentDesc = file[0]['description'];
            _this.pictureElement.src = config_service_1.Config.PICTUREFOLDER + file[0]['filename'];
            console.log('Video: ' + _this.pictureElement.src);
        };
    }
    PictureService.prototype.appSetup = function (v) {
        this.pictureElement = document.getElementById(v);
    };
    PictureService.prototype.getPlaylist = function (id) {
        var _this = this;
        this.http.get(config_service_1.Config.WEBSERVICESURL + 'studentpictures/GetByStudentId/' + id.toString())
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .subscribe(function (data) {
            _this.picturelist = data;
            _this.selectedPicture(1);
            _this.createPictureCategories();
        });
    };
    ;
    PictureService.prototype.createPictureCategories = function () {
        var categories = this.uniqueCategories();
        var p = this.picturelist;
        var rootnodes = [];
        //For each category
        categories.forEach(function (item) {
            var parent = [];
            var files = p.filter(function (e) { return e.category == item; });
            parent.label = item;
            parent.data = "";
            parent.expandedIcon = "";
            parent.collapsedIcon = "";
            parent.children = [];
            files.forEach(function (file) {
                var childnode = [];
                childnode.label = file.title;
                childnode.data = file.id;
                childnode.expandedIcon = "";
                childnode.collapsedIcon = "";
                parent.children.push(childnode);
            });
            rootnodes.push(parent);
        });
        this.pictureData = rootnodes;
        console.log(rootnodes);
    };
    PictureService.prototype.uniqueCategories = function () {
        return this.picturelist.map(function (e) { return e['category']; }).filter(function (e, i, a) {
            return i === a.indexOf(e);
        });
    };
    ;
    PictureService.prototype.details = function () {
        if (this.showDetails == false) {
            this.showDetails = true;
        }
        else {
            this.showDetails = false;
        }
    };
    ;
    PictureService.prototype.fullScreen = function () {
        if (this.pictureElement.requestFullscreen) {
            this.pictureElement.requestFullscreen();
        }
        else if (this.pictureElement.mozRequestFullScreen) {
            this.pictureElement.mozRequestFullScreen();
        }
        else if (this.pictureElement.webkitRequestFullscreen) {
            this.pictureElement.webkitRequestFullscreen();
        }
        else if (this.pictureElement.msRequestFullscreen) {
            this.pictureElement.msRequestFullscreen();
        }
    };
    ;
    return PictureService;
}());
PictureService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PictureService);
exports.PictureService = PictureService;
//# sourceMappingURL=picture.service.js.map