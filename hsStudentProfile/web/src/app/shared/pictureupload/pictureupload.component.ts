import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { AuthService } from '../../services/auth.service';
import { Config } from '../../config.service';

@Component({
    selector: 'pictureupload',
    moduleId: module.id,
    templateUrl: './pictureupload.component.html'
})
export class PictureUpload implements OnInit {
    //@Input() pichdr: string;
    @Input() showfields: boolean = true;
    @Input() picurl: string;
    @Output() onFormSubmit = new EventEmitter();
    public uploader:FileUploader;

    fileitem = "";
    category = "";
    title = "";
    description = "";

    constructor(private _authService: AuthService) {}

    ngOnInit(): void {
        var thisurl = Config.WEBSERVICESURL + this.picurl + this._authService.userid;
        this.uploader = new FileUploader({url:thisurl, authToken: 'Bearer ' + this._authService.token });

        if (this.showfields == false) {
            this.category = "Profile Picture";
            this.title = "Profile Picture";
            this.description = "Profile Picture";
        }

        this.uploader.onBeforeUploadItem = (item: FileItem) => {
            if (this.category=="")
                this.category = 'Uncategorized';

            if (this.title=="")
                this.title = 'No title';

            if (this.description=="")
                this.description = 'No description';

            this.uploader.options.additionalParameter = {
                category: this.category,
                title: this.title,
                description: this.description
            };
        };

        this.uploader.onCompleteItem = (fileItem, response, status, headers) => {
            this.fileitem = "";
            this.category = "";
            this.title = "";
            this.description = "";
            this.onFormSubmit.emit();
        };
    }

    clearQueue():void {
        this.uploader.clearQueue();
    }
} 

