"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var getAndRemoveAdjacentAt_1 = require("@writetome51/array-get-and-removers-basic/getAndRemoveAdjacentAt");
var getAndRemoveHead_1 = require("@writetome51/array-get-and-removers-basic/getAndRemoveHead");
var getAndRemoveTail_1 = require("@writetome51/array-get-and-removers-basic/getAndRemoveTail");
var getAndRemoveItem_1 = require("@writetome51/array-get-and-removers-basic/getAndRemoveItem");
var getAndRemoveMiddle_1 = require("@writetome51/array-get-and-removers-basic/getAndRemoveMiddle");
var getAndRemoveAllAfterFirst_1 = require("@writetome51/array-get-and-remove-all-before-or-after-public/getAndRemoveAllAfterFirst");
var getAndRemoveAllBeforeFirst_1 = require("@writetome51/array-get-and-remove-all-before-or-after-public/getAndRemoveAllBeforeFirst");
var getAndRemoveAllAfterLast_1 = require("@writetome51/array-get-and-remove-all-before-or-after-public/getAndRemoveAllAfterLast");
var getAndRemoveAllBeforeLast_1 = require("@writetome51/array-get-and-remove-all-before-or-after-public/getAndRemoveAllBeforeLast");
var getAndRemoveAdjacentToValue_1 = require("@writetome51/array-get-and-remove-adjacent-to-value/getAndRemoveAdjacentToValue");
var getAndRemoveFilteredResults_1 = require("@writetome51/array-get-and-removers-filtered-results-duplicates/getAndRemoveFilteredResults");
var getAndRemoveDuplicates_1 = require("@writetome51/array-get-and-removers-filtered-results-duplicates/getAndRemoveDuplicates");
var OpenArrayContainer_1 = require("@writetome51/open-array-container/OpenArrayContainer");
var OpenArrayItemGetterRemover = /** @class */ (function (_super) {
    __extends(OpenArrayItemGetterRemover, _super);
    function OpenArrayItemGetterRemover(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    // These functions modify the array and return the removed data:
    // index can be negative or positive.
    OpenArrayItemGetterRemover.prototype.item = function (index) {
        return getAndRemoveItem_1.getAndRemoveItem(index, this.data);
    };
    OpenArrayItemGetterRemover.prototype.head = function (numItemsToRemove) {
        return getAndRemoveHead_1.getAndRemoveHead(numItemsToRemove, this.data);
    };
    OpenArrayItemGetterRemover.prototype.tail = function (numItemsToRemove) {
        return getAndRemoveTail_1.getAndRemoveTail(numItemsToRemove, this.data);
    };
    OpenArrayItemGetterRemover.prototype.middle = function (numItemsToKeepAtEachEnd) {
        return getAndRemoveMiddle_1.getAndRemoveMiddle(numItemsToKeepAtEachEnd, this.data);
    };
    // startingIndex can be negative or positive.
    OpenArrayItemGetterRemover.prototype.adjacentAt = function (startingIndex, numItemsToRemove) {
        return getAndRemoveAdjacentAt_1.getAndRemoveAdjacentAt(startingIndex, numItemsToRemove, this.data);
    };
    // info = {value: anyExceptObject, offset: number, howMany: number}
    OpenArrayItemGetterRemover.prototype.adjacentToValue = function (info) {
        return getAndRemoveAdjacentToValue_1.getAndRemoveAdjacentToValue(info, this.data);
    };
    // For all the functions below, the parameter 'value' cannot be object.
    OpenArrayItemGetterRemover.prototype.allAfterFirst = function (value) {
        return getAndRemoveAllAfterFirst_1.getAndRemoveAllAfterFirst(value, this.data);
    };
    OpenArrayItemGetterRemover.prototype.allBeforeFirst = function (value) {
        return getAndRemoveAllBeforeFirst_1.getAndRemoveAllBeforeFirst(value, this.data);
    };
    OpenArrayItemGetterRemover.prototype.allAfterLast = function (value) {
        return getAndRemoveAllAfterLast_1.getAndRemoveAllAfterLast(value, this.data);
    };
    OpenArrayItemGetterRemover.prototype.allBeforeLast = function (value) {
        return getAndRemoveAllBeforeLast_1.getAndRemoveAllBeforeLast(value, this.data);
    };
    OpenArrayItemGetterRemover.prototype.duplicates = function () {
        return getAndRemoveDuplicates_1.getAndRemoveDuplicates(this.data);
    };
    // testFunction has same signature as callback passed to array.filter():
    OpenArrayItemGetterRemover.prototype.byTest = function (testFunction) {
        return getAndRemoveFilteredResults_1.getAndRemoveFilteredResults(testFunction, this.data);
    };
    OpenArrayItemGetterRemover.prototype.byType = function (type) {
        if (type === 'array') {
            return this.byTest(function (item) {
                return (isArray_notArray_1.isArray(item));
            });
        }
        else {
            return this.byTest(function (item) {
                return (typeof item === type);
            });
        }
    };
    return OpenArrayItemGetterRemover;
}(OpenArrayContainer_1.OpenArrayContainer));
exports.OpenArrayItemGetterRemover = OpenArrayItemGetterRemover;
