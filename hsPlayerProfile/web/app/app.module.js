"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//External Modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var primeng_1 = require("primeng/primeng");
//Google Maps
//import { AgmCoreModule } from 'angular2-google-maps/core';
//Data Services
var data_service_1 = require("./services/data.service");
//routing setup
var app_routes_1 = require("./app.routes");
//Main startup Component
var app_component_1 = require("./app.component");
//Main Menu features
var about_component_1 = require("./about/about.component");
var home_component_1 = require("./home/home.component");
//Student Profile Component
var studentprofile_component_1 = require("./studentprofile/studentprofile.component");
//Video components
var videos_component_1 = require("./studentprofile/videos/videos.component");
var video_service_1 = require("./studentprofile/videos/video.service");
var progress_component_1 = require("./studentprofile/videos/progress.component");
var toolbar_component_1 = require("./studentprofile/videos/toolbar.component");
var options_component_1 = require("./studentprofile/videos/options.component");
var timedisplay_pipe_1 = require("./studentprofile/videos//timedisplay.pipe");
//Picture components
var pictures_component_1 = require("./studentprofile/pictures/pictures.component");
var picture_service_1 = require("./studentprofile/pictures/picture.service");
//Academic components
var academics_component_1 = require("./studentprofile/academics/academics.component");
var grade_component_1 = require("./studentprofile/academics/grade.component");
var testscores_component_1 = require("./studentprofile/academics/testscores.component");
var grade_filter_pipe_1 = require("./studentprofile/academics/grade-filter.pipe");
var schedule_component_1 = require("./studentprofile/schedule/schedule.component");
var links_component_1 = require("./studentprofile/links/links.component");
var profile_component_1 = require("./studentprofile/profile/profile.component");
var contactme_component_1 = require("./studentprofile/contactme/contactme.component");
//Grade Filter
//Module declaration
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            app_routes_1.Routing,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            primeng_1.AccordionModule,
            primeng_1.GalleriaModule,
            primeng_1.TreeModule
        ],
        declarations: [
            app_component_1.AppComponent,
            about_component_1.AboutComponent,
            home_component_1.HomeComponent,
            studentprofile_component_1.StudentProfileComponent,
            videos_component_1.VideosComponent,
            progress_component_1.ProgressComponent,
            toolbar_component_1.ToolbarComponent,
            options_component_1.OptionsComponent,
            timedisplay_pipe_1.TimeDisplayPipe,
            pictures_component_1.PicturesComponent,
            academics_component_1.AcademicsComponent,
            grade_component_1.GradeComponent,
            grade_filter_pipe_1.GradeFilterPipe,
            testscores_component_1.TestScoresComponent,
            schedule_component_1.ScheduleComponent,
            links_component_1.LinksComponent,
            profile_component_1.ProfileComponent,
            contactme_component_1.ContactMeComponent
        ],
        providers: [data_service_1.DataService, video_service_1.VideoService, picture_service_1.PictureService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map