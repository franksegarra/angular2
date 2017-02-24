"use strict";
var router_1 = require("@angular/router");
var academics_component_1 = require("../academics/academics.component");
var schedule_component_1 = require("../schedule/schedule.component");
var myprofile_component_1 = require("../profile/myprofile.component");
var links_component_1 = require("../links/links.component");
var contactme_component_1 = require("../contactme/contactme.component");
var appRoutes = [
    // {
    //         path: 'studentprofile', 
    //         component: StudentProfileComponent,
    //         children: [
    { path: '', component: academics_component_1.AcademicsComponent },
    { path: 'academics', component: academics_component_1.AcademicsComponent },
    { path: 'links', component: links_component_1.LinksComponent },
    { path: 'contactme', component: contactme_component_1.ContactMeComponent },
    { path: 'schedule', component: schedule_component_1.ScheduleComponent },
    { path: 'profile', component: myprofile_component_1.MyProfileComponent }
];
exports.ProfileRouting = router_1.RouterModule.forChild(appRoutes);
//# sourceMappingURL=studentprofile.routes.js.map