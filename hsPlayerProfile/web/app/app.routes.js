"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
//Main menu
var home_component_1 = require("./home/home.component");
var studentprofile_component_1 = require("./studentprofile/studentprofile.component");
var about_component_1 = require("./about/about.component");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'studentprofile/:id', component: studentprofile_component_1.StudentProfileComponent },
    { path: 'studentprofile', component: studentprofile_component_1.StudentProfileComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: '', redirectTo: 'studentprofile', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map