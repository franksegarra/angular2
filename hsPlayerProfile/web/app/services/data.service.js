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
;
;
var DataService = (function () {
    function DataService(_http) {
        var _this = this;
        this._http = _http;
        this.getClientIPAddress().subscribe(function (p) { return _this.ipaddress = p; }, function (error) { return _this.errorMessage = error; });
    }
    DataService.prototype.getClientIPAddress = function () {
        return this._http.get('https://api.ipify.org?format=json')
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('getClientIPAddress: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    DataService.prototype.verifyRecaptchaResponse = function (event) {
        console.log('Event');
        console.log(event);
        var recaptcharesponse = event;
        var recaptchaOutcome = { success: null, challenge_ts: null, hostname: '', errorcodes: [] };
        console.log('recaptcharesponse');
        console.log(recaptcharesponse);
        var posturl = config_service_1.Config.GOOGLERECAPTCHAURL +
            '?secret=' + config_service_1.Config.GOOGLERECAPTCHAKEY +
            '&response=' + recaptcharesponse.response +
            '&remoteip=' + this.ipaddress.ip;
        console.log('posturl');
        console.log(posturl);
        this._http.post(config_service_1.Config.GOOGLERECAPTCHAURL, '')
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            recaptchaOutcome = data;
        });
        console.log('recaptchaOutcome');
        console.log(recaptchaOutcome);
        return recaptchaOutcome.success;
    };
    //   "https://www.google.com/recaptcha/api/siteverify?secret=<--Your Secret Key-->&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']
    //Get List of Profile Pictures to exclude from picture list
    DataService.prototype.getProfilePictures = function (id) {
        return this._http.get(config_service_1.Config.WEBSERVICESURL + 'studentprofilepictures/GetByStudentId/' + id)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('getProfilePictures: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    //Get Classes
    DataService.prototype.getClasses = function (id) {
        return this._http.get(config_service_1.Config.WEBSERVICESURL + 'studentclasses/GetByStudentId/' + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //Get Extra Curricular
    DataService.prototype.getExtraCurricular = function (id) {
        return this._http.get(config_service_1.Config.WEBSERVICESURL + 'studentextracurricular/GetByStudentId/' + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // Get Links
    DataService.prototype.getLinks = function (id) {
        return this._http.get(config_service_1.Config.WEBSERVICESURL + 'studentlinks/GetByStudentId/' + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //Get Schedule
    DataService.prototype.getSchedule = function (id) {
        return this._http.get(config_service_1.Config.WEBSERVICESURL + 'studentschedwithactivity/GetByStudentId/' + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //Get student
    DataService.prototype.getStudent = function (id) {
        return this._http.get(config_service_1.Config.WEBSERVICESURL + 'student/' + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //Get profile
    DataService.prototype.getProfile = function (id) {
        return this._http.get(config_service_1.Config.WEBSERVICESURL + 'studentprofile/' + id)
            .map(function (response) { return response.json(); })
            .first()
            .do(function (data) { return console.log('getProfile: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    DataService.prototype.getProfileByName = function (profilename) {
        return this._http.get(config_service_1.Config.WEBSERVICESURL + 'studentprofile/' + profilename)
            .map(function (response) { return response.json(); })
            .first()
            .catch(this.handleError);
    };
    DataService.prototype.poststudentContact = function (msg) {
        var body = JSON.stringify(msg);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(config_service_1.Config.WEBSERVICESURL + 'studentcontact/', body, options)
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
        return this._http.post(config_service_1.Config.WEBSERVICESURL + 'email/', body, options)
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