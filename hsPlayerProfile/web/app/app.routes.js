"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var studentprofile_component_1 = require("./studentprofile/studentprofile.component");
var appRoutes = [
    //{path: 'studentprofile', component: StudentProfileComponent},
    { path: 'home', redirectTo: 'studentprofile', pathMatch: 'full' },
    { path: 'studentprofile/:id', component: studentprofile_component_1.StudentProfileComponent },
    // {path: 'about', component: AboutComponent},
    { path: '', redirectTo: 'studentprofile/1', pathMatch: 'full' },
    { path: '**', redirectTo: 'studentprofile/1', pathMatch: 'full' },
    { path: 'studentprofile', redirectTo: 'studentprofile/1', pathMatch: 'full' },
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map