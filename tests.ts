import { OpenArrayItemGetterRemover } from './OpenArrayItemGetterRemover';
import { arraysMatch } from '@writetome51/arrays-match/arraysMatch';


let getAndRemove = new OpenArrayItemGetterRemover([1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10]);

let otherArr = getAndRemove.data;


// Test 1
let result = getAndRemove.duplicates();
if (arraysMatch(result, [1, 3, 5])) console.log('test 1 passed');
else console.log('test 1 failed');

// Test 2
if (arraysMatch(otherArr, getAndRemove.data)) console.log('test 2 passed');
else console.log('test 1 failed');

// Test 3
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.byTest((item) => {
	return item > 4;
});
if (arraysMatch(result, [5, 5, 6, 7, 8, 9, 10])) console.log('test 3 passed');
else console.log('test 3 failed');

// Test 4
if (arraysMatch(getAndRemove.data, otherArr)) console.log('test 4 passed');
else console.log('test 4 failed');


// Test 5
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.allAfterFirst(5);
if (arraysMatch(result, [5, 6, 7, 8, 9, 10])) console.log('test 5 passed');
else console.log('test 5 failed');

// Test 6
if (arraysMatch(getAndRemove.data, otherArr)) console.log('test 6 passed');
else console.log('test 6 failed');


// Test 7
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.middle(4);
if (arraysMatch(result, [3, 4, 5, 5, 6])) console.log('test 7 passed');
else console.log('test 7 failed');

// Test 8
if (arraysMatch(getAndRemove.data, otherArr)) console.log('test 8 passed');
else console.log('test 8 failed');


// Test 9
getAndRemove.data = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
otherArr = getAndRemove.data;
result = getAndRemove.tail(4);
if (arraysMatch(result, [7,8,9,10])) console.log('test 9 passed');
else console.log('test 9 failed');

// Test 10
if (arraysMatch(getAndRemove.data, otherArr)) console.log('test 10 passed');
else console.log('test 10 failed');
