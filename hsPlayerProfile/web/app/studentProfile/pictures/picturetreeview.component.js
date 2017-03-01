// import { Component, Input } from '@angular/core';
// import { PictureService } from './picture.service';
// @Component({
//     selector: 'picture-tree-view',
//     template: `
//         <ul>
//             <li *ngFor="let category of pictureservice.categorylist">
//                 <span (click)="category.toggle()">{{ category.category }}</span>
//                 <div *ngIf="category.expanded">
//                     <ul >
//                         <li class="list-group-item" *ngFor="let file of category.files" (click)="pictureservice.selectedPictureById(file.id)"> {{ file.title }} </li>
//                     </ul>
//                 </div>
//             </li>
//         </ul>
//     `
// })
// export class PictureTreeViewComponent {
//     @Input() pictureservice: PictureService;
// }  
//# sourceMappingURL=picturetreeview.component.js.map