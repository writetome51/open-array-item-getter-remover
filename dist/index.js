"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotString_1 = require("basic-data-handling/errorIfNotString");
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var array_get_and_remove_adjacent_at_1 = require("@writetome51/array-get-and-remove-adjacent-at");
var array_get_and_remove_adjacent_to_value_1 = require("@writetome51/array-get-and-remove-adjacent-to-value");
var array_get_and_remove_all_after_1 = require("@writetome51/array-get-and-remove-all-after");
var array_get_and_remove_all_before_1 = require("@writetome51/array-get-and-remove-all-before");
var array_get_and_remove_between_1 = require("@writetome51/array-get-and-remove-between");
var array_get_and_remove_head_tail_1 = require("@writetome51/array-get-and-remove-head-tail");
var array_get_and_remove_by_index_1 = require("@writetome51/array-get-and-remove-by-index");
var array_get_and_remove_by_indexes_1 = require("@writetome51/array-get-and-remove-by-indexes");
var array_get_and_remove_by_test_1 = require("@writetome51/array-get-and-remove-by-test");
var array_get_and_remove_duplicates_1 = require("@writetome51/array-get-and-remove-duplicates");
var public_array_container_1 = require("@writetome51/public-array-container");
var PublicArrayGetterRemover = /** @class */ (function (_super) {
    __extends(PublicArrayGetterRemover, _super);
    function PublicArrayGetterRemover(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    // These functions remove items from the array and return them.
    // index can be negative or positive.
    PublicArrayGetterRemover.prototype.byIndex = function (index) {
        return array_get_and_remove_by_index_1.getAndRemoveByIndex(index, this.data);
    };
    // indexes can be negative or positive.
    PublicArrayGetterRemover.prototype.byIndexes = function (indexes) {
        return array_get_and_remove_by_indexes_1.getAndRemoveByIndexes(indexes, this.data);
    };
    PublicArrayGetterRemover.prototype.head = function (numItemsToRemove) {
        return array_get_and_remove_head_tail_1.getAndRemoveHead(numItemsToRemove, this.data);
    };
    PublicArrayGetterRemover.prototype.tail = function (numItemsToRemove) {
        return array_get_and_remove_head_tail_1.getAndRemoveTail(numItemsToRemove, this.data);
    };
    // Returns middle of array, between numItemsToIgnoreAtEachEnd
    PublicArrayGetterRemover.prototype.between = function (numItemsToKeepAtEachEnd) {
        return array_get_and_remove_between_1.getAndRemoveBetween(numItemsToKeepAtEachEnd, this.data);
    };
    // startingIndex can be negative or positive.
    PublicArrayGetterRemover.prototype.adjacentAt = function (startingIndex, numItemsToRemove) {
        return array_get_and_remove_adjacent_at_1.getAndRemoveAdjacentAt(startingIndex, numItemsToRemove, this.data);
    };
    // For all the functions below, the parameter 'value' cannot be object.
    // It can be an array, as long as the array doesn't contain objects.
    PublicArrayGetterRemover.prototype.adjacentToValue = function (info) {
        return array_get_and_remove_adjacent_to_value_1.getAndRemoveAdjacentToValue(info, this.data);
    };
    /********
     Explanation of adjacentToValue(info: IAdjacentToValueInfo): any[]
     Removes and returns adjacent items including, or near, a particular value.
     Only applies to the first instance of value found in array.
     The parameter 'info' is an object that looks like this:
     {
            value: any except object (the value to search for in the array),
            offset: integer (tells function where, in relation to value, to begin selecting adjacent
                    items to remove/return.  If offset is zero, the selection will begin with value.)
            howMany: integer greater than zero (it's how many adjacent items to remove/return)
     }

     Example:
     let getAndRemove = new PublicArrayGetterRemover( [1,2,3,4,5,6,7,8,9,10] );
     let numbers = getAndRemove.adjacentToValue({value:5, offset: -2, howMany:3});
     // numbers is now [3,4,5].  getAndRemove.data is now [1,2,6,7,8,9,10]
     *********/
    PublicArrayGetterRemover.prototype.allAfterFirst = function (value) {
        return array_get_and_remove_all_after_1.getAndRemoveAllAfterFirst(value, this.data);
    };
    PublicArrayGetterRemover.prototype.allBeforeFirst = function (value) {
        return array_get_and_remove_all_before_1.getAndRemoveAllBeforeFirst(value, this.data);
    };
    PublicArrayGetterRemover.prototype.allAfterLast = function (value) {
        return array_get_and_remove_all_after_1.getAndRemoveAllAfterLast(value, this.data);
    };
    PublicArrayGetterRemover.prototype.allBeforeLast = function (value) {
        return array_get_and_remove_all_before_1.getAndRemoveAllBeforeLast(value, this.data);
    };
    // removes and returns every instance of a duplicate, so you may get multiple instances.
    PublicArrayGetterRemover.prototype.duplicates = function () {
        return array_get_and_remove_duplicates_1.getAndRemoveDuplicates(this.data);
    };
    /************
     These last 2 methods both return an array of IValueIndexPairs.  A IValueIndexPair looks like this:

     {value: any,  index: number}

     It represents a removed item.
     ************/
    PublicArrayGetterRemover.prototype.byTest = function (testFunction) {
        return array_get_and_remove_by_test_1.getAndRemoveByTest(testFunction, this.data);
    };
    PublicArrayGetterRemover.prototype.byType = function (type) {
        errorIfNotString_1.errorIfNotString(type);
        // @ts-ignore
        type = type.toLowerCase();
        if (type === 'array')
            return this.byTest(function (item) { return isArray_notArray_1.isArray(item); });
        else
            return this.byTest(function (item) { return typeof item === type; });
    };
    return PublicArrayGetterRemover;
}(public_array_container_1.PublicArrayContainer));
exports.PublicArrayGetterRemover = PublicArrayGetterRemover;
