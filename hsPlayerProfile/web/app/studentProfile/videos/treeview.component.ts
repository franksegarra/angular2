import { Component, Input } from '@angular/core';
import { VideoCategory } from './VideoCategory';

@Component({
    selector: 'tree-view',
    template: `
        <ul>
            <li *ngFor="let category of categories">
                <span><input type="checkbox" [checked]="category.checked" (click)="category.check()"    /></span> 
                <span (click)="category.toggle()">{{ category.category }}</span>
                <div *ngIf="category.expanded">
                    <ul >
                        <li *ngFor="let file of category.files">{{file}}</li>
                    </ul>
                </div>
            </li>
        </ul>
    `
})
export class TreeViewComponent {
    @Input() categories: Array<VideoCategory>;
}