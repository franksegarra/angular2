"use strict";
var router_1 = require("@angular/router");
//Main menu
var home_component_1 = require("./home/home.component");
var studentprofile_component_1 = require("./studentprofile/studentprofile.component");
var about_component_1 = require("./about/about.component");
//Side menu
var studentprofilemenu_component_1 = require("./studentprofile/studentprofilemenu.component");
//Student Profile menu
var academics_component_1 = require("./academics/academics.component");
var links_component_1 = require("./links/links.component");
var contactme_component_1 = require("./contactme/contactme.component");
var schedule_component_1 = require("./schedule/schedule.component");
var myprofile_component_1 = require("./profile/myprofile.component");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    {
        path: 'studentprofile',
        component: studentprofile_component_1.StudentProfileComponent,
        children: [
            { path: '', outlet: 'sidemenu', component: studentprofilemenu_component_1.StudentProfileMenuComponent },
            { path: '', component: academics_component_1.AcademicsComponent },
            { path: 'academics', component: academics_component_1.AcademicsComponent },
            { path: 'links', component: links_component_1.LinksComponent },
            { path: 'contactme', component: contactme_component_1.ContactMeComponent },
            { path: 'schedule', component: schedule_component_1.ScheduleComponent },
            { path: 'profile', component: myprofile_component_1.MyProfileComponent }
        ]
    },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map