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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
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
            _this.selectedPictureId = _this.picturelist[i]['id'];
            _this.currentTitle = _this.picturelist[i]['title'];
            _this.currentDesc = _this.picturelist[i]['description'];
            _this.pictureElement.src = config_service_1.Config.PICTUREFOLDER + _this.picturelist[i]['filename'];
        };
        this.selectedPictureById = function (id) {
            var file = _this.picturelist.filter(function (e) { return e.id == id; });
            _this.selectedPictureId = file[0]['id'];
            _this.currentTitle = file[0]['title'];
            _this.currentDesc = file[0]['description'];
            _this.pictureElement.src = config_service_1.Config.PICTUREFOLDER + file[0]['filename'];
        };
    }
    PictureService.prototype.appSetup = function (v, _profilepics) {
        this.pictureElement = document.getElementById(v);
        this.profilepics = _profilepics;
    };
    PictureService.prototype.getPlaylist = function (id) {
        var _this = this;
        //Test to see if we already have data for this object
        if (this.picturelist.length > 0) {
            this.selectedPictureById(this.selectedPictureId);
            return;
        }
        this.http.get(config_service_1.Config.WEBSERVICESURL + 'studentpictures/GetByStudentId/' + id.toString())
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log('getPlaylist: ' + JSON.stringify(data)); })
            .subscribe(function (data) {
            _this.picturelist = data;
            _this.createPictureCategories();
            _this.selectedPicture(1);
        });
    };
    ;
    PictureService.prototype.createPictureCategories = function () {
        //If we use a picture for on the academics or stats pages, don't include them in the list
        var picstoexclude = this.profilepics;
        //If we find the items remove them
        for (var pe = 0; pe < picstoexclude.length; pe++) {
            var len = this.picturelist.length - 1;
            for (var i = len; i >= 0; i--) {
                if (picstoexclude[pe].pictureid === this.picturelist[i].id)
                    this.picturelist.splice(i, 1);
            }
        }
        var categories = this.picturelist.map(function (e) { return e['category']; }).filter(function (e, i, a) { return i === a.indexOf(e); });
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
    };
    return PictureService;
}());
PictureService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PictureService);
exports.PictureService = PictureService;
//# sourceMappingURL=picture.service.js.map