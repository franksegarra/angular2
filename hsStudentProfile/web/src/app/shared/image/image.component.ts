import { Component, Input } from '@angular/core';
import { Config } from '../../config.service';
import { SecurePipe } from '../../pipes/secure.pipe';

@Component({
    selector: 'pp-image',
    moduleId: module.id,
    templateUrl: 'image.component.html'
})
export class ImageComponent { 
    public imageid: number;
    public urlStub = Config.WEBSERVICESURL + 'picture/'; 
    public url: string;

    setImageId(id:number) {
        this.imageid = id;
        this.url = this.urlStub + this.imageid;
    }
}
