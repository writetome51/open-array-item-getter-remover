To include in your project:

import {PublicArrayItemGetterRemover} from '@writetome51/public-array-item-getter-remover';

The PublicArrayItemGetterRemover class is a dependency of the PublicArray class  
( package:  @writetome51/public-array ).

To instantiate, pass the actual array it will contain into its constructor:

let getAndRemove = new PublicArrayItemGetterRemover( [item1, item2, item3,...] );

You can also reset the array by accessing the class 'data' property:

getAndRemove.data = [1,2,3,4,...];


PublicArrayItemGetterRemover has several methods that both remove and return items from
the array.  These are all of them:


    // index can be negative or positive.
	item(index): any


	head(numItemsToRemove): any[]


	tail(numItemsToRemove): any[]


	between(numItemsToKeepAtEachEnd): any[]


	// startingIndex can be negative or positive.
	adjacentAt(startingIndex, numItemsToRemove): any[]


	// info = {value: anyExceptObject,  offset: integer,  howMany: integer greater than zero}
	adjacentToValue(info): any[]


	// For all the functions below, the parameter 'value' cannot be object.

	allAfterFirst(value: any): any[]

	allBeforeFirst(value: any): any[]

	allAfterLast(value: any): any[]

	allBeforeLast(value: any): any[]


	duplicates(): any[]


    // Gets and removes any value that passes test:
	byTest(testFunction: (currentValue, currentIndex?, array?) => boolean): any[]


	byType(type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'): any[]