"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var arrays_match_1 = require("@writetome51/arrays-match");
var getAndRemove = new index_1.PublicArrayGetterRemover([1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10]);
var otherArr = getAndRemove.data;
// Test 1
var result = getAndRemove.byIndex(-1);
if (result === 10)
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 1A
if (getAndRemove.data.length === 12 && getAndRemove.data[11] === 9)
    console.log('test 1A passed');
else
    console.log('test 1A FAILED');
// Test 1B
result = getAndRemove.byIndexes([-1, 0, -3]);
if (arrays_match_1.arraysMatch(result, [1, 7, 9]))
    console.log('test 1B passed');
else
    console.log('test 1B FAILED');
// Test 2
if (arrays_match_1.arraysMatch(otherArr, getAndRemove.data))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.head(3);
if (arrays_match_1.arraysMatch(result, [1, 1, 2]))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4
if (arrays_match_1.arraysMatch(otherArr, getAndRemove.data))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 5
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.tail(4);
if (arrays_match_1.arraysMatch(result, [7, 8, 9, 10]) && arrays_match_1.arraysMatch(getAndRemove.data, [1, 1, 2, 3, 3, 4, 5, 5, 6]))
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 6
if (arrays_match_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
// Test 7
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.between(4);
if (arrays_match_1.arraysMatch(result, [3, 4, 5, 5, 6]))
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
// Test 8
if (arrays_match_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
// Test 9
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.adjacentAt(3, 5);
if (arrays_match_1.arraysMatch(result, [3, 3, 4, 5, 5]))
    console.log('test 9 passed');
else
    console.log('test 9 FAILED');
// Test 10
if (arrays_match_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
// Test 11
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.adjacentToValue({ value: 6, offset: -3, howMany: 5 });
if (arrays_match_1.arraysMatch(result, [4, 5, 5, 6, 7]))
    console.log('test 11 passed');
else
    console.log('test 11 FAILED');
// Test 12
if (arrays_match_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 12 passed');
else
    console.log('test 12 FAILED');
// Test 13
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.allAfterFirst(5);
if (arrays_match_1.arraysMatch(result, [5, 6, 7, 8, 9, 10]))
    console.log('test 13 passed');
else
    console.log('test 13 FAILED');
// Test 14
if (arrays_match_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 14 passed');
else
    console.log('test 14 FAILED');
// Test 15
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.allBeforeFirst(5);
if (arrays_match_1.arraysMatch(result, [1, 1, 2, 3, 3, 4]))
    console.log('test 15 passed');
else
    console.log('test 15 FAILED');
// Test 16
if (arrays_match_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 16 passed');
else
    console.log('test 16 FAILED');
// Test 17
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.allAfterLast(5);
if (arrays_match_1.arraysMatch(result, [6, 7, 8, 9, 10]))
    console.log('test 17 passed');
else
    console.log('test 17 FAILED');
// Test 18
if (arrays_match_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 18 passed');
else
    console.log('test 18 FAILED');
// Test 19
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.allBeforeLast(5);
if (arrays_match_1.arraysMatch(result, [1, 1, 2, 3, 3, 4, 5]))
    console.log('test 19 passed');
else
    console.log('test 19 FAILED');
// Test 20
if (arrays_match_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 20 passed');
else
    console.log('test 20 FAILED');
// Test 21
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.duplicates();
if (arrays_match_1.arraysMatch(result, [1, 3, 5]))
    console.log('test 21 passed');
else
    console.log('test 21 FAILED');
// Test 22
if (arrays_match_1.arraysMatch(otherArr, getAndRemove.data))
    console.log('test 22 passed');
else
    console.log('test 22 FAILED');
// Test 23
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.byTest(function (item) {
    return item < 2;
});
if (result.length === 2 && result[0]['value'] === 1 && result[1]['value'] === 1 &&
    result[0]['index'] === 0 && result[1]['index'] === 1)
    console.log('test 23 passed');
else
    console.log('test 23 FAILED');
// Test 24
if (arrays_match_1.arraysMatch(getAndRemove.data, otherArr))
    console.log('test 24 passed');
else
    console.log('test 24 FAILED');
// Test 25
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10, 'a', 'b'];
otherArr = getAndRemove.data;
result = getAndRemove.byType('string');
if (result.length === 2 && result[0]['value'] === 'a' && result[1]['value'] === 'b' &&
    result[0]['index'] === 13 && result[1]['index'] === 14)
    console.log('test 25 passed');
else
    console.log('test 25 FAILED');
// Test 25A
getAndRemove.data = [1, '', false, { prop1: 1 }, [], null, undefined];
otherArr = getAndRemove.data;
result = getAndRemove.byType('object');
if (result.length === 2 &&
    result[0]['value'].prop1 === 1 && result[0]['index'] === 3 &&
    result[1]['value'].length === 0 && result[1]['index'] === 4)
    console.log('test 25A passed');
else
    console.log('test 25A FAILED');
// Test 25B
getAndRemove.data = [1, '', false, { prop1: 1 }, [], null, undefined];
otherArr = getAndRemove.data;
result = getAndRemove.byType('null');
if (result.length === 1 &&
    result[0]['value'] === null && result[0]['index'] === 5)
    console.log('test 25B passed');
else
    console.log('test 25B FAILED');
// Test 25B
getAndRemove.data = [1, '', false, { prop1: 1 }, [], null, undefined];
otherArr = getAndRemove.data;
result = getAndRemove.byType('undefined');
if (result.length === 1 &&
    result[0]['value'] === undefined && result[0]['index'] === 6)
    console.log('test 25C passed');
else
    console.log('test 25C FAILED');
// Test 26
if (arrays_match_1.arraysMatch(otherArr, getAndRemove.data))
    console.log('test 26 passed');
else
    console.log('test 26 FAILED');
