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
var forms_1 = require("@angular/forms");
var data_service_1 = require("../../services/data.service");
var ContactMeComponent = (function () {
    function ContactMeComponent(fb, _dataService) {
        this.fb = fb;
        this._dataService = _dataService;
        this.contactname = new forms_1.FormControl("", forms_1.Validators.required);
        this.contactphone = new forms_1.FormControl("");
        this.contactemail = new forms_1.FormControl("", forms_1.Validators.required);
        this.message = new forms_1.FormControl("", forms_1.Validators.required);
        this.display = false;
        this.dialogContent = '';
        this.reCaptchaValid = false;
    }
    ContactMeComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            "contactname": ["", forms_1.Validators.required],
            "contactphone": [""],
            "contactemail": ["", forms_1.Validators.required],
            "message": ["", forms_1.Validators.required]
        });
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Contact Me';
    };
    ContactMeComponent.prototype.onSubmit = function () {
        var _this = this;
        var id = this.myprofile.id;
        var studentemail = this.myprofile.primaryEmail;
        var msg = {
            studentid: id,
            contactname: this.form.value['contactname'],
            contactphone: this.form.value['contactphone'],
            contactemail: this.form.value['contactemail'],
            message: this.form.value['message']
        };
        var ds = this._dataService;
        var response;
        ds.poststudentContact(msg)
            .subscribe(function (response) {
            /* this function is executed every time there's a new output */
            console.log("VALUE RECEIVED: " + response);
        }, function (err) {
            _this.showDialog("We''re so sorry.  There was an error saving your message information to the database.");
            console.log("ERROR in component. save to db: " + err);
        }, function () {
            /* this function is executed when the observable ends (completes) its stream */
            console.log("post to database completed");
            ds.sendEMailToStudent(msg, studentemail)
                .subscribe(function (response) {
                /* this function is executed every time there's a new output */
                console.log("VALUE RECEIVED: " + response);
            }, function (err) {
                _this.showDialog("We''re so sorry.  There was an error sending your message.");
                console.log("ERROR in component. Send email: " + err);
            }, function () {
                _this.showDialog('Your messages was sent.  A copy was also sent to ' + msg.contactemail + '. Please check your email to see this message.');
                _this.form.reset();
                console.log("COMPLETED in component");
            });
        });
    };
    ;
    ContactMeComponent.prototype.showResponse = function (event) {
        var _this = this;
        this.reCaptchaValid = false;
        console.log(event);
        var recaptchaOutcome;
        this._dataService.verifyRecaptchaResponse(event)
            .subscribe(function (response) {
            /* this function is executed every time there's a new output */
            recaptchaOutcome = response;
            _this.reCaptchaValid = recaptchaOutcome.success;
            console.log("VALUE RECEIVED: " + recaptchaOutcome.success);
        }, function (err) {
            _this.showDialog("We''re so sorry.  There was an error saving your message information to the database.");
            console.log("ERROR in component. save to db: " + err);
        }, function () {
            console.log("Completed");
        });
    };
    ContactMeComponent.prototype.showDialog = function (message) {
        this.dialogContent = message;
        this.display = true;
    };
    ContactMeComponent.prototype.hideDialog = function () {
        this.dialogContent = '';
        this.display = false;
    };
    return ContactMeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ContactMeComponent.prototype, "myprofile", void 0);
ContactMeComponent = __decorate([
    core_1.Component({
        selector: 'pp-contactme',
        moduleId: module.id,
        templateUrl: 'contactme.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, data_service_1.DataService])
], ContactMeComponent);
exports.ContactMeComponent = ContactMeComponent;
//# sourceMappingURL=contactme.component.js.map