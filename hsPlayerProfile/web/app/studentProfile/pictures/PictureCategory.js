"use strict";
var PictureCategory = (function () {
    function PictureCategory(category, files) {
        this.category = category;
        this.files = files;
        this.expanded = false;
        this.checked = false;
    }
    PictureCategory.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    PictureCategory.prototype.check = function () {
        var newState = !this.checked;
        this.checked = newState;
    };
    return PictureCategory;
}());
exports.PictureCategory = PictureCategory;
//# sourceMappingURL=PictureCategory.js.map