import { Component, OnInit, Input } from '@angular/core';
import { Config } from '../../config.service';
import { SecurePipe } from '../../pipes/secure.pipe';

@Component({
    selector: 'pp-image',
    moduleId: module.id,
    templateUrl: 'image.component.html'
})
export class ImageComponent implements OnInit { 
    public imageid: number;
    public urlStub = Config.WEBSERVICESURL + 'picture/'; 
    public url: string;

    ngOnInit(): void {
        this.url = this.urlStub + this.imageid;
    }

    setImageId(id:number) {
        this.imageid = id;
        this.url = this.urlStub + this.imageid;
    }
}
