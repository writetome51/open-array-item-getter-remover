"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OpenArrayItemGetterRemover_1 = require("./OpenArrayItemGetterRemover");
var arraysMatch_1 = require("@writetome51/arrays-match/arraysMatch");
var getAndRemove = new OpenArrayItemGetterRemover_1.OpenArrayItemGetterRemover([1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10]);
var otherArr = getAndRemove.data;
// Test 1
var result = getAndRemove.item(-1);
if (result === 10)
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 1A
if (getAndRemove.data.length === 12 && getAndRemove.data[11] === 9)
    console.log('test 1A passed');
else
    console.log('test 1A failed');
// Test 2
if (arraysMatch_1.arraysMatch(otherArr, getAndRemove.data))
    console.log('test 2 passed');
else
    console.log('test 2 failed');
// Test 3
result = getAndRemove.head(3);
if (arraysMatch_1.arraysMatch(result, [1, 1, 2]))
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 4
if (arraysMatch_1.arraysMatch(otherArr, getAndRemove.data))
    console.log('test 4 passed');
else
    console.log('test 4 failed');
// Test 5
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.tail(4);
if (arraysMatch_1.arraysMatch(result, [7, 8, 9, 10]))
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
result = getAndRemove.between(4);
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
result = getAndRemove.adjacentAt(3, 5);
if (arraysMatch_1.arraysMatch(result, [3, 3, 4, 5, 5]))
    console.log('test 9 passed');
else
    console.log('test 9 failed');
// Test 10
if (arraysMatch_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 10 passed');
else
    console.log('test 10 failed');
// Test 11
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.adjacentToValue({ value: 6, offset: -3, howMany: 5 });
if (arraysMatch_1.arraysMatch(result, [4, 5, 5, 6, 7]))
    console.log('test 11 passed');
else
    console.log('test 11 failed');
// Test 12
if (arraysMatch_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 12 passed');
else
    console.log('test 12 failed');
// Test 13
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.allAfterFirst(5);
if (arraysMatch_1.arraysMatch(result, [5, 6, 7, 8, 9, 10]))
    console.log('test 13 passed');
else
    console.log('test 13 failed');
// Test 14
if (arraysMatch_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 14 passed');
else
    console.log('test 14 failed');
// Test 15
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.allBeforeFirst(5);
if (arraysMatch_1.arraysMatch(result, [1, 1, 2, 3, 3, 4]))
    console.log('test 15 passed');
else
    console.log('test 15 failed');
// Test 16
if (arraysMatch_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 16 passed');
else
    console.log('test 16 failed');
// Test 17
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.allAfterLast(5);
if (arraysMatch_1.arraysMatch(result, [6, 7, 8, 9, 10]))
    console.log('test 17 passed');
else
    console.log('test 17 failed');
// Test 18
if (arraysMatch_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 18 passed');
else
    console.log('test 18 failed');
// Test 19
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.allBeforeLast(5);
if (arraysMatch_1.arraysMatch(result, [1, 1, 2, 3, 3, 4, 5]))
    console.log('test 19 passed');
else
    console.log('test 19 failed');
// Test 20
if (arraysMatch_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 20 passed');
else
    console.log('test 20 failed');
// Test 21
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.duplicates();
if (arraysMatch_1.arraysMatch(result, [1, 3, 5]))
    console.log('test 21 passed');
else
    console.log('test 21 failed');
// Test 22
if (arraysMatch_1.arraysMatch(otherArr, getAndRemove.data))
    console.log('test 22 passed');
else
    console.log('test 22 failed');
// Test 23
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.byTest(function (item) {
    return item > 4;
});
if (arraysMatch_1.arraysMatch(result, [5, 5, 6, 7, 8, 9, 10]))
    console.log('test 23 passed');
else
    console.log('test 23 failed');
// Test 24
if (arraysMatch_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 24 passed');
else
    console.log('test 24 failed');
// Test 25
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.byType('number');
if (arraysMatch_1.arraysMatch(result, [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10]))
    console.log('test 25 passed');
else
    console.log('test 25 failed');
// Test 26
if (arraysMatch_1.arraysMatch(otherArr, getAndRemove.data))
    console.log('test 26 passed');
else
    console.log('test 26 failed');
