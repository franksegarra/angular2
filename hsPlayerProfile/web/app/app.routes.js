"use strict";
var router_1 = require("@angular/router");
var studentprofile_component_1 = require("./studentprofile/studentprofile.component");
var academics_component_1 = require("./academics/academics.component");
var links_component_1 = require("./links/links.component");
var contactme_component_1 = require("./contactme/contactme.component");
var schedule_component_1 = require("./schedule/schedule.component");
var myprofile_component_1 = require("./profile/myprofile.component");
var appRoutes = [
    { path: 'welcome', component: studentprofile_component_1.StudentProfileComponent },
    { path: 'academics', component: academics_component_1.AcademicsComponent },
    { path: 'links', component: links_component_1.LinksComponent },
    { path: 'contactme', component: contactme_component_1.ContactMeComponent },
    { path: 'schedule', component: schedule_component_1.ScheduleComponent },
    { path: 'profile', component: myprofile_component_1.MyProfileComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map