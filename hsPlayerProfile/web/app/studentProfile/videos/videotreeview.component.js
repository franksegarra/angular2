// import { Component, Input } from '@angular/core';
// import { VideoService } from './video.service';
// @Component({
//     selector: 'video-tree-view',
//     template: `
//         <ul>
//             <li *ngFor="let category of videoservice.categorylist">
//                 <span (click)="category.toggle()">{{ category.category }}</span>
//                 <div *ngIf="category.expanded">
//                     <ul >
//                         <li class="list-group-item" *ngFor="let file of category.files" (click)="videoservice.selectedVideoById(file.id)"> {{ file.title }} </li>
//                     </ul>
//                 </div>
//             </li>
//         </ul>
//     `
// })
// export class VideoTreeViewComponent {
//     @Input() videoservice: VideoService;
// }  
//# sourceMappingURL=videotreeview.component.js.map