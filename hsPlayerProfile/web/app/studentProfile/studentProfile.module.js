"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var primeng_1 = require("primeng/primeng");
//Services
var data_service_1 = require("../services/data.service");
var video_service_1 = require("../studentprofile/videos/video.service");
var picture_service_1 = require("../studentprofile/pictures/picture.service");
var stats_service_1 = require("../studentprofile/stats/stats.service");
//Main component for this module
var studentprofile_component_1 = require("./studentprofile.component");
//Student Profile - Academics
var academics_component_1 = require("./academics/academics.component");
var grade_component_1 = require("./academics/grade.component");
var testscores_component_1 = require("./academics/testscores.component");
var grade_filter_pipe_1 = require("./academics/grade-filter.pipe");
var extracurricular_component_1 = require("./academics/extracurricular.component");
//Student Profile - Video
var videos_component_1 = require("./videos/videos.component");
var progress_component_1 = require("./videos/progress.component");
var toolbar_component_1 = require("./videos/toolbar.component");
var options_component_1 = require("./videos/options.component");
var timedisplay_pipe_1 = require("./videos//timedisplay.pipe");
//Student Profile - Pictures
var pictures_component_1 = require("./pictures/pictures.component");
//Schedule
var schedule_component_1 = require("./schedule/schedule.component");
//Stats
var physical_component_1 = require("./stats/physical.component");
var stats_component_1 = require("./stats/stats.component");
var statcategory_component_1 = require("./stats/statcategory.component");
//Links
var links_component_1 = require("./links/links.component");
//Contact ME
var contactme_component_1 = require("./contactme/contactme.component");
//Pipes
var tbdFormat_pipe_1 = require("../pipes/tbdFormat.pipe");
var phoneFormat_pipe_1 = require("../pipes/phoneFormat.pipe");
//Module declaration
var StudentProfileModule = (function () {
    function StudentProfileModule() {
    }
    return StudentProfileModule;
}());
StudentProfileModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            primeng_1.AccordionModule,
            primeng_1.TreeModule,
            primeng_1.TooltipModule,
            primeng_1.PanelModule,
        ],
        declarations: [
            studentprofile_component_1.StudentProfileComponent,
            academics_component_1.AcademicsComponent,
            grade_component_1.GradeComponent,
            grade_filter_pipe_1.GradeFilterPipe,
            testscores_component_1.TestScoresComponent,
            extracurricular_component_1.ExtraCurricularComponent,
            videos_component_1.VideosComponent,
            progress_component_1.ProgressComponent,
            toolbar_component_1.ToolbarComponent,
            options_component_1.OptionsComponent,
            timedisplay_pipe_1.TimeDisplayPipe,
            pictures_component_1.PicturesComponent,
            schedule_component_1.ScheduleComponent,
            tbdFormat_pipe_1.TBDFormatPipe,
            stats_component_1.StatsComponent,
            physical_component_1.PhysicalComponent,
            statcategory_component_1.StatCategory,
            links_component_1.LinksComponent,
            contactme_component_1.ContactMeComponent,
            phoneFormat_pipe_1.PhoneFormatPipe
        ],
        providers: [data_service_1.DataService, video_service_1.VideoService, picture_service_1.PictureService, stats_service_1.StatsService],
    })
], StudentProfileModule);
exports.StudentProfileModule = StudentProfileModule;
//# sourceMappingURL=studentprofile.module.js.map