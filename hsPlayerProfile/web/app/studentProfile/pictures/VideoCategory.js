"use strict";
var VideoCategory = (function () {
    function VideoCategory(category, files) {
        this.category = category;
        this.files = files;
        this.expanded = false;
        this.checked = false;
    }
    VideoCategory.prototype.toggle = function () {
        this.expanded = !this.expanded;
        console.log('toggle');
    };
    VideoCategory.prototype.check = function () {
        var newState = !this.checked;
        this.checked = newState;
        console.log(this.expanded);
        console.log('files: ' + JSON.stringify(this.files));
    };
    return VideoCategory;
}());
exports.VideoCategory = VideoCategory;
//# sourceMappingURL=VideoCategory.js.map