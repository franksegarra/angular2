import { IPicture } from './IPicture';

export class PictureCategory {
    category: string;
    files: Array<IPicture>;
    expanded:boolean;
    checked:boolean;
    constructor(category: string, files: Array<IPicture>) {
        this.category = category;
        this.files = files;
        this.expanded = false;
        this.checked = false;
    }
    toggle(){
        this.expanded = !this.expanded;
    }
    check(){
        let newState = !this.checked;
        this.checked = newState;
    }
}