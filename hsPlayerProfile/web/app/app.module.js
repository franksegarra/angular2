"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//External Modules
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var primeng_1 = require("primeng/primeng");
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
//Student Profile - Academics
var academics_component_1 = require("./studentprofile/academics/academics.component");
var grade_component_1 = require("./studentprofile/academics/grade.component");
var testscores_component_1 = require("./studentprofile/academics/testscores.component");
var grade_filter_pipe_1 = require("./studentprofile/academics/grade-filter.pipe");
var extracurricular_component_1 = require("./studentprofile/academics/extracurricular.component");
//Student Profile - Video
var videos_component_1 = require("./studentprofile/videos/videos.component");
var video_service_1 = require("./studentprofile/videos/video.service");
var progress_component_1 = require("./studentprofile/videos/progress.component");
var toolbar_component_1 = require("./studentprofile/videos/toolbar.component");
var options_component_1 = require("./studentprofile/videos/options.component");
var timedisplay_pipe_1 = require("./studentprofile/videos//timedisplay.pipe");
//Student Profile - Pictures
var pictures_component_1 = require("./studentprofile/pictures/pictures.component");
var picture_service_1 = require("./studentprofile/pictures/picture.service");
//Schedule
var schedule_component_1 = require("./studentprofile/schedule/schedule.component");
//Links
var links_component_1 = require("./studentprofile/links/links.component");
//Stats
var stats_service_1 = require("./studentprofile/stats/stats.service");
var physical_component_1 = require("./studentprofile/stats/physical.component");
var stats_component_1 = require("./studentprofile/stats/stats.component");
var statcategory_component_1 = require("./studentprofile/stats/statcategory.component");
//Contact ME
var contactme_component_1 = require("./studentprofile/contactme/contactme.component");
//Pipes
var tbdFormat_pipe_1 = require("./pipes/tbdFormat.pipe");
var phoneFormat_pipe_1 = require("./pipes/phoneFormat.pipe");
//Module declaration
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            app_routes_1.Routing,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            primeng_1.AccordionModule,
            primeng_1.TreeModule,
            primeng_1.TooltipModule,
            primeng_1.PanelModule
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
            extracurricular_component_1.ExtraCurricularComponent,
            schedule_component_1.ScheduleComponent,
            tbdFormat_pipe_1.TBDFormatPipe,
            links_component_1.LinksComponent,
            stats_component_1.StatsComponent,
            physical_component_1.PhysicalComponent,
            statcategory_component_1.StatCategory,
            contactme_component_1.ContactMeComponent,
            phoneFormat_pipe_1.PhoneFormatPipe
        ],
        providers: [data_service_1.DataService, video_service_1.VideoService, picture_service_1.PictureService, stats_service_1.StatsService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map