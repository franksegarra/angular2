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
    };
    VideoCategory.prototype.check = function () {
        var newState = !this.checked;
        this.checked = newState;
    };
    return VideoCategory;
}());
exports.VideoCategory = VideoCategory;
//# sourceMappingURL=VideoCategory.js.map