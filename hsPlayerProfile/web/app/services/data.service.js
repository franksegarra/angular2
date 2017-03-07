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
var Observable_1 = require("rxjs/Observable");
//Global settings
var config_service_1 = require("../config.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/first");
var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
        this._classesUrl = config_service_1.Config.WEBSERVICESURL + 'studentclasses/GetByStudentId/';
        this._ecUrl = config_service_1.Config.WEBSERVICESURL + 'studentextracurricular/GetByStudentId/';
        this._schedUrl = config_service_1.Config.WEBSERVICESURL + 'studentschedwithactivity/GetByStudentId/';
        this._linksUrl = config_service_1.Config.WEBSERVICESURL + 'studentlinks/GetByStudentId/';
        this._profilesUrl = config_service_1.Config.WEBSERVICESURL + 'studentprofile/';
        this._studentsUrl = config_service_1.Config.WEBSERVICESURL + 'student/';
        this._studentcontactUrl = config_service_1.Config.WEBSERVICESURL + 'studentcontact/';
        this._emailUrl = config_service_1.Config.WEBSERVICESURL + 'email/';
    }
    //Get Classes
    DataService.prototype.getClasses = function (id) {
        return this._http.get(this._classesUrl + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //Get Extra Curricular
    DataService.prototype.getExtraCurricular = function (id) {
        return this._http.get(this._ecUrl + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Get Links
    DataService.prototype.getLinks = function (id) {
        return this._http.get(this._linksUrl + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //Get Schedule
    DataService.prototype.getSchedule = function (id) {
        return this._http.get(this._schedUrl + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //Get student
    DataService.prototype.getStudent = function (id) {
        return this._http.get(this._studentsUrl + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //Get profile
    DataService.prototype.getProfile = function (id) {
        return this._http.get(this._profilesUrl + id)
            .map(function (response) { return response.json(); })
            .first()
            .do(function (data) { return console.log('getProfile: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    DataService.prototype.getProfileByName = function (profilename) {
        return this._http.get(this._profilesUrl + profilename)
            .map(function (response) { return response.json(); })
            .first()
            .catch(this.handleError);
    };
    DataService.prototype.poststudentContact = function (msg) {
        var body = JSON.stringify(msg);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._studentcontactUrl, body, options)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    DataService.prototype.sendEMailToStudent = function (msg, studentemail) {
        var mail = {
            from: msg.contactemail,
            to: studentemail,
            cc: msg.contactemail,
            subject: msg.contactname + ' has sent you a message.',
            text: msg.message
        };
        var body = JSON.stringify(mail);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._emailUrl, body, options)
            .map(function (res) { return res; })
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