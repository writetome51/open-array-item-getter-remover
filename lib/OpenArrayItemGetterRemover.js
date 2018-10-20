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
var getAndRemoveAdjacentAt_1 = require("@writetome51/array-get-and-remove-adjacent-at/getAndRemoveAdjacentAt");
var getAndRemoveAdjacentToValue_1 = require("@writetome51/array-get-and-remove-adjacent-to-value/getAndRemoveAdjacentToValue");
var array_get_and_remove_between_1 = require("@writetome51/array-get-and-remove-between");
var getAndRemoveHead_1 = require("@writetome51/array-get-and-remove-head-tail/getAndRemoveHead");
var getAndRemoveTail_1 = require("@writetome51/array-get-and-remove-head-tail/getAndRemoveTail");
var array_get_and_remove_item_1 = require("@writetome51/array-get-and-remove-item");
var getAndRemoveAllAfterFirst_1 = require("@writetome51/array-get-and-remove-all-after/getAndRemoveAllAfterFirst");
var getAndRemoveAllAfterLast_1 = require("@writetome51/array-get-and-remove-all-after/getAndRemoveAllAfterLast");
var getAndRemoveAllBeforeFirst_1 = require("@writetome51/array-get-and-remove-all-before/getAndRemoveAllBeforeFirst");
var getAndRemoveAllBeforeLast_1 = require("@writetome51/array-get-and-remove-all-before/getAndRemoveAllBeforeLast");
var array_get_and_remove_filtered_results_1 = require("@writetome51/array-get-and-remove-filtered-results");
var array_get_and_remove_duplicates_1 = require("@writetome51/array-get-and-remove-duplicates");
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
        return array_get_and_remove_item_1.getAndRemoveItem(index, this.data);
    };
    OpenArrayItemGetterRemover.prototype.head = function (numItemsToRemove) {
        return getAndRemoveHead_1.getAndRemoveHead(numItemsToRemove, this.data);
    };
    OpenArrayItemGetterRemover.prototype.tail = function (numItemsToRemove) {
        return getAndRemoveTail_1.getAndRemoveTail(numItemsToRemove, this.data);
    };
    OpenArrayItemGetterRemover.prototype.between = function (numItemsToKeepAtEachEnd) {
        return array_get_and_remove_between_1.getAndRemoveBetween(numItemsToKeepAtEachEnd, this.data);
    };
    // startingIndex can be negative or positive.
    OpenArrayItemGetterRemover.prototype.adjacentAt = function (startingIndex, numItemsToRemove) {
        return getAndRemoveAdjacentAt_1.getAndRemoveAdjacentAt(startingIndex, numItemsToRemove, this.data);
    };
    // info = {value: anyExceptObject,  offset: integer,  howMany: integer greater than zero}
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
        return array_get_and_remove_duplicates_1.getAndRemoveDuplicates(this.data);
    };
    // testFunction = function(currentValue, currentIndex, theArray){...}
    // testFunction must return boolean.
    OpenArrayItemGetterRemover.prototype.byTest = function (testFunction) {
        return array_get_and_remove_filtered_results_1.getAndRemoveFilteredResults(testFunction, this.data);
    };
    OpenArrayItemGetterRemover.prototype.byType = function (type) {
        // @ts-ignore
        type = type.toLowerCase();
        if (type === 'array')
            return this.byTest(function (item) { return isArray_notArray_1.isArray(item); });
        else
            return this.byTest(function (item) { return typeof item === type; });
    };
    return OpenArrayItemGetterRemover;
}(OpenArrayContainer_1.OpenArrayContainer));
exports.OpenArrayItemGetterRemover = OpenArrayItemGetterRemover;
