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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
        //private baseUrl = 'http://localhost:64425/api/';
        this._classesUrl = 'http://localhost:64425/api/studentclasses/GetByStudentId/1'; //'api/classes/classes.json';
        this._schedUrl = 'http://localhost:64425/api/studentschedules/GetByStudentId/1'; //'api/schedule/schedule.json';
        this._linksUrl = 'http://localhost:64425/api/studentlinks/GetByStudentId/1'; //'api/links/links.json';
        this._profilesUrl = 'http://localhost:64425/api/studentprofile/1'; // 'api/profile/profile.json';
    }
    //Get Classes
    DataService.prototype.getClasses = function () {
        return this._http.get(this._classesUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    // Get Links
    DataService.prototype.getLinks = function () {
        return this._http.get(this._linksUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    //Get Schedule
    DataService.prototype.getSchedule = function () {
        return this._http.get(this._schedUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    //Get profile
    DataService.prototype.getMyProfile = function () {
        return this._http.get(this._profilesUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error(error);
        console.error('error in service');
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map