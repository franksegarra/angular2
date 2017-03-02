import { Component, Input, OnInit } from '@angular/core';
import { IClass } from '../../models/IClass';

@Component({
    selector: 'pp-grade',
    moduleId: module.id,
    templateUrl: 'grade.component.html'
})
export class GradeComponent  implements OnInit { 
    @Input() grade: number;
    @Input() classes: IClass[];
    average: number;

    ngOnInit(): void {
        //this.calculateAverage();
    };

    // calculateAverage() {
    //     let sumGrades = 0;
    //     let countGrades = 0;
    //     var mygrade = this.grade;
    //     var myclasses: IClass[] = this.classes;

    //     myclasses.forEach(function( cl:IClass ) {
    //         if (cl.grade == mygrade )
    //         {
    //             sumGrades += cl.finalAverage;
    //             countGrades += 1;
    //         }
    //     });

    //     if (countGrades > 0 )
    //     {
    //         this.average = sumGrades/countGrades;
    //     }
    // }
}