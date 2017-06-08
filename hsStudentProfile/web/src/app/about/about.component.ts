import { Component,  OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ImageComponent } from '../shared/image/image.component';

@Component({
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
    @ViewChild(ImageComponent) private imageComponent: ImageComponent;

    public pageTitle: string = 'About Us';
    form: FormGroup;
    pictureid = new FormControl("", Validators.required);
 
    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            "pictureid": [""]
        });
    }

    onSubmit(): void { 
        this.imageComponent.setImageId(this.form.value['pictureid']);
    }

}