import { getAndRemoveAdjacentAt } from '@writetome51/array-get-and-remove-adjacent-at';
import { getAndRemoveAdjacentToValue } from '@writetome51/array-get-and-remove-adjacent-to-value';
import { getAndRemoveAllAfterFirst, getAndRemoveAllAfterLast }
	from '@writetome51/array-get-and-remove-all-after';
import { getAndRemoveAllBeforeFirst, getAndRemoveAllBeforeLast }
	from '@writetome51/array-get-and-remove-all-before';
import { getAndRemoveBetween } from '@writetome51/array-get-and-remove-between';
import { getAndRemoveHead, getAndRemoveTail } from '@writetome51/array-get-and-remove-head-tail';
import { getAndRemoveByIndex } from '@writetome51/array-get-and-remove-by-index';
import { getAndRemoveByIndexes } from '@writetome51/array-get-and-remove-by-indexes';
import { getAndRemoveByTest } from '@writetome51/array-get-and-remove-by-test';
import { getAndRemoveDuplicates } from '@writetome51/array-get-and-remove-duplicates';
import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';
import { IValueIndexPair } from 'value-index-pair-interface/IValueIndexPair';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { _publicArrayContainer_byType_implementation }
	from '@writetome51/public-array-container-by-type-implementation';


export class PublicArrayGetterRemover extends PublicArrayContainer {


	// These functions remove items from the array and return them.


	// index can be negative or positive.

	byIndex(index): any {
		return getAndRemoveByIndex(index, this.data);
	}


	// indexes can be negative or positive.

	byIndexes(indexes): any[] {
		return getAndRemoveByIndexes(indexes, this.data);
	}


	head(numItemsToRemove): any[] {
		return getAndRemoveHead(numItemsToRemove, this.data);
	}


	tail(numItemsToRemove): any[] {
		return getAndRemoveTail(numItemsToRemove, this.data);
	}


	// Returns middle of array, between numItemsToIgnoreAtEachEnd

	between(numItemsToKeepAtEachEnd): any[] {
		return getAndRemoveBetween(numItemsToKeepAtEachEnd, this.data);
	}


	// startingIndex can be negative or positive.

	adjacentAt(startingIndex, numItemsToRemove): any[] {
		return getAndRemoveAdjacentAt(startingIndex, numItemsToRemove, this.data);
	}


	// For all the functions below, the parameter 'value' cannot be object.
	// It can be an array, as long as the array doesn't contain objects.


	adjacentToValue(info: IAdjacentToValueInfo): any[] {
		return getAndRemoveAdjacentToValue(info, this.data);
	}
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


	allAfterFirst(value: any): any[] {
		return getAndRemoveAllAfterFirst(value, this.data);
	}


	allBeforeFirst(value: any): any[] {
		return getAndRemoveAllBeforeFirst(value, this.data);
	}


	allAfterLast(value: any): any[] {
		return getAndRemoveAllAfterLast(value, this.data);
	}


	allBeforeLast(value: any): any[] {
		return getAndRemoveAllBeforeLast(value, this.data);
	}


	// removes and returns every instance of a duplicate, so you may get multiple instances.

	duplicates(): any[] {
		return getAndRemoveDuplicates(this.data);
	}


	/************
	 These last 2 methods both return an array of IValueIndexPairs.  A IValueIndexPair looks like this:

	 {value: any,  index: number}

	 It represents a removed item.
	 ************/


	byTest(testFunction: (currentValue, currentIndex?, array?) => boolean): IValueIndexPair[] {
		return getAndRemoveByTest(testFunction, this.data);
	}


	byType(
		type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined' | 'null'
	): IValueIndexPair[] {

		return _publicArrayContainer_byType_implementation(type, this);
	}


}
