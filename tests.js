"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OpenArrayItemGetterRemover_1 = require("./OpenArrayItemGetterRemover");
var arraysMatch_1 = require("@writetome51/arrays-match/arraysMatch");
var getAndRemove = new OpenArrayItemGetterRemover_1.OpenArrayItemGetterRemover([1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10]);
var otherArr = getAndRemove.data;
// Test 1
var result = getAndRemove.duplicates();
if (arraysMatch_1.arraysMatch(result, [1, 3, 5]))
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2
if (arraysMatch_1.arraysMatch(otherArr, getAndRemove.data))
    console.log('test 2 passed');
else
    console.log('test 1 failed');
// Test 3
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.byTest(function (item) {
    return item > 4;
});
if (arraysMatch_1.arraysMatch(result, [5, 5, 6, 7, 8, 9, 10]))
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 4
if (arraysMatch_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 4 passed');
else
    console.log('test 4 failed');
// Test 5
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.allAfterFirst(5);
if (arraysMatch_1.arraysMatch(result, [5, 6, 7, 8, 9, 10]))
    console.log('test 5 passed');
else
    console.log('test 5 failed');
// Test 6
if (arraysMatch_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 6 passed');
else
    console.log('test 6 failed');
// Test 7
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.middle(4);
if (arraysMatch_1.arraysMatch(result, [3, 4, 5, 5, 6]))
    console.log('test 7 passed');
else
    console.log('test 7 failed');
// Test 8
if (arraysMatch_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 8 passed');
else
    console.log('test 8 failed');
// Test 9
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.tail(4);
if (arraysMatch_1.arraysMatch(result, [7, 8, 9, 10]))
    console.log('test 9 passed');
else
    console.log('test 9 failed');
// Test 10
if (arraysMatch_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 10 passed');
else
    console.log('test 10 failed');
