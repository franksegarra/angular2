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
var messageform_component_1 = require("../../shared/messageform/messageform.component");
var data_service_1 = require("../../services/data.service");
var ContactMeComponent = (function () {
    function ContactMeComponent(_dataService) {
        this._dataService = _dataService;
        this.panelMessage = 'Send me a message:';
    }
    ContactMeComponent.prototype.ngOnInit = function () {
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Contact Me';
    };
    ContactMeComponent.prototype.onSubmit = function (event) {
        var _this = this;
        console.log("On Submit in contactme");
        var inputmsg = event;
        var id = this.myprofile.id;
        var studentemail = this.myprofile.primaryEmail;
        var msg = {
            studentid: id,
            contactname: inputmsg.contactname,
            contactphone: inputmsg.contactphone,
            contactemail: inputmsg.contactemail,
            message: inputmsg.message,
            ipaddress: ''
        };
        var ds = this._dataService;
        var response;
        ds.poststudentContact(msg)
            .subscribe(function (response) {
            /* this function is executed every time there's a new output */
            console.log("VALUE RECEIVED: " + response);
        }, function (err) {
            _this.messageFormComponent.showDialog("We''re so sorry.  There was an error saving your message information to the database.");
            console.log("ERROR in component. save to db: " + err);
        }, function () {
            /* this function is executed when the observable ends (completes) its stream */
            console.log("post to database completed");
            ds.sendEMailToStudent(msg, studentemail)
                .subscribe(function (response) {
                /* this function is executed every time there's a new output */
                console.log("VALUE RECEIVED: " + response);
            }, function (err) {
                _this.messageFormComponent.showDialog("We''re so sorry.  There was an error sending your message.");
                console.log("ERROR in component. Send email: " + err);
            }, function () {
                _this.messageFormComponent.showDialog('Your messages was sent.  A copy was also sent to ' + msg.contactemail + '. Please check your email to see this message.');
                _this.messageFormComponent.reset();
                console.log("COMPLETED in component");
            });
        });
    };
    ;
    return ContactMeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ContactMeComponent.prototype, "myprofile", void 0);
__decorate([
    core_1.ViewChild(messageform_component_1.MessageFormComponent),
    __metadata("design:type", messageform_component_1.MessageFormComponent)
], ContactMeComponent.prototype, "messageFormComponent", void 0);
ContactMeComponent = __decorate([
    core_1.Component({
        selector: 'pp-contactme',
        moduleId: module.id,
        templateUrl: 'contactme.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], ContactMeComponent);
exports.ContactMeComponent = ContactMeComponent;
//# sourceMappingURL=contactme.component.js.map