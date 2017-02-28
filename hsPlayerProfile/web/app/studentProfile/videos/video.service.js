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
var VideoCategory_1 = require("./VideoCategory");
require("rxjs/add/operator/map");
//Global settings
var config_service_1 = require("../../config.service");
var VideoService = (function () {
    function VideoService(http) {
        var _this = this;
        this.http = http;
        this.currentPath = "";
        this.currentTitle = "loading...";
        this.currentTime = 0;
        this.totalTime = 0;
        this.isMuted = false;
        this.isPlaying = false;
        this.isDragging = false;
        this.showDetails = false;
        this.currentDesc = "A very nice video...";
        this.playlist = [];
        this.categorylist = [];
        this.selectedVideoById = function (id) {
            var file = _this.playlist.filter(function (e) { return e.id == id; });
            _this.currentTitle = file[0]['title'];
            _this.currentDesc = file[0]['description'];
            _this.videoElement.src = config_service_1.Config.VIDEOFOLDER + file[0]['filename'];
            _this.videoElement.pause();
            _this.isPlaying = false;
            console.log('Video: ' + _this.videoElement.src);
        };
        this.selectedVideo = function (i) {
            _this.currentTitle = _this.playlist[i]['title'];
            _this.currentDesc = _this.playlist[i]['description'];
            _this.videoElement.src = config_service_1.Config.VIDEOFOLDER + _this.playlist[i]['filename'];
            _this.videoElement.pause();
            _this.isPlaying = false;
            console.log('Video: ' + _this.videoElement.src);
        };
        this.dragStart = function (e) {
            this.isDragging = true;
        };
        this.dragMove = function (e) {
            if (this.isDragging) {
                this.calculatedWidth = e.x;
            }
        };
        this.dragStop = function (e) {
            if (this.isDragging) {
                this.isDragging = false;
                this.seekVideo(e);
            }
        };
        this.updateData = function (e) {
            _this.totalTime = _this.videoElement.duration;
        };
        this.updateTime = function (e) {
            _this.currentTime = _this.videoElement.currentTime;
        };
        this.timerFired = function () {
            if (!_this.isDragging) {
                _this.calculatedScrubY = _this.videoElement.offsetHeight;
                var t = _this.videoElement.currentTime;
                var d = _this.videoElement.duration;
                _this.calculatedWidth = (t / d * _this.videoElement.offsetWidth);
            }
        };
    }
    VideoService.prototype.appSetup = function (v) {
        this.videoElement = document.getElementById(v);
        this.videoElement.addEventListener("loadedmetadata", this.updateData);
        this.videoElement.addEventListener("timeupdate", this.updateTime);
        window.setInterval(this.timerFired, 500);
    };
    VideoService.prototype.getPlaylist = function (id) {
        var _this = this;
        this.http.get(config_service_1.Config.WEBSERVICESURL + 'studentvideos/GetByStudentId/' + id.toString())
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.playlist = data;
            _this.selectedVideo(1);
            _this.createVideoCategories();
        });
    };
    ;
    VideoService.prototype.createVideoCategories = function () {
        var categories = this.uniqueCategories();
        var p = this.playlist;
        var c = [];
        categories.forEach(function (item) {
            var files = p.filter(function (e) { return e.category == item; });
            var vidcategory = new VideoCategory_1.VideoCategory(item, files);
            c.push(vidcategory);
        });
        this.categorylist = c;
    };
    VideoService.prototype.uniqueCategories = function () {
        return this.playlist.map(function (e) { return e['category']; }).filter(function (e, i, a) {
            return i === a.indexOf(e);
        });
    };
    ;
    VideoService.prototype.seekVideo = function (e) {
        var w = document.getElementById('progressMeterFull').offsetWidth;
        var d = this.videoElement.duration;
        var s = Math.round(e.pageX / w * d);
        this.videoElement.currentTime = s;
    };
    ;
    VideoService.prototype.muteVideo = function () {
        if (this.videoElement.volume == 0) {
            this.videoElement.volume = 1;
            this.isMuted = false;
        }
        else {
            this.videoElement.volume = 0;
            this.isMuted = true;
        }
    };
    ;
    VideoService.prototype.playVideo = function () {
        if (this.videoElement.paused) {
            this.videoElement.play();
            this.isPlaying = true;
        }
        else {
            this.videoElement.pause();
            this.isPlaying = false;
        }
    };
    ;
    VideoService.prototype.details = function () {
        if (this.showDetails == false) {
            this.showDetails = true;
        }
        else {
            this.showDetails = false;
        }
    };
    ;
    VideoService.prototype.fullScreen = function () {
        if (this.videoElement.requestFullscreen) {
            this.videoElement.requestFullscreen();
        }
        else if (this.videoElement.mozRequestFullScreen) {
            this.videoElement.mozRequestFullScreen();
        }
        else if (this.videoElement.webkitRequestFullscreen) {
            this.videoElement.webkitRequestFullscreen();
        }
        else if (this.videoElement.msRequestFullscreen) {
            this.videoElement.msRequestFullscreen();
        }
    };
    ;
    return VideoService;
}());
VideoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], VideoService);
exports.VideoService = VideoService;
//# sourceMappingURL=video.service.js.map