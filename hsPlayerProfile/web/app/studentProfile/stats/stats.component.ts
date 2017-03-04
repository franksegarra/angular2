import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../models/IProfile';
import { IBBProfile } from '../../models/IBBProfile';
import { IHittingStats } from '../../models/IHittingStats';

//Data service
import { StatsService } from './stats.service';

@Component({
    selector: 'pp-stats',
    moduleId: module.id,
    templateUrl: 'stats.component.html'
})
export class StatsComponent { 
    @Input() myprofile: IProfile;
    bbprofile: IBBProfile;
    errorMessage: string;
    pageTitle: string;
    hittingStats: IHittingStats[];

    constructor(private _statsService: StatsService) {
    }
    
    ngOnInit(): void {
        this.pageTitle = this.myprofile.firstName + ' ' + this.myprofile.lastName + ' - ' + this.myprofile.graduationYear + ' - ' + 'Stats';
        this._statsService.getBBProfile(this.myprofile.id).subscribe(p => this.bbprofile = p[0], error => this.errorMessage = <any>error);
        this._statsService.getHittingStats(this.myprofile.id).subscribe(h => this.hittingStats = h, error => this.errorMessage = <any>error);
        this._statsService.getHittingList(this.myprofile.id);
    }

    createPictureCategories() {

        var categories:Array<string> = this.hittingStats.map(function(e) { return e['category']; }).filter(function(e,i,a){
                return i === a.indexOf(e);
            });

        console.log(categories);



        // var p:Array<IPicture> = this.picturelist;
        // var rootnodes:Array<TreeNode> = [];

        // //For each category
        // categories.forEach(function(item) {
        //     var parent: TreeNode = [];
        //     var files = p.filter(function(e){return e.category == item;});

        //     parent.label = item;
        //     parent.data = "";
        //     parent.expandedIcon = "";
        //     parent.collapsedIcon = "";
        //     parent.children = [];
        
        //     files.forEach(function(file) {
        //         var childnode: TreeNode = [];
        //         childnode.label = file.title
        //         childnode.data = file.id
        //         childnode.expandedIcon = "";
        //         childnode.collapsedIcon = "";
        //         parent.children.push(childnode);
        //     });

        //     rootnodes.push(parent);
        });

}