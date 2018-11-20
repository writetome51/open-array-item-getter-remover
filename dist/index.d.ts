import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';
import { IValueIndexPair } from 'value-index-pair-interface/IValueIndexPair';
import { PublicArrayContainer } from '@writetome51/public-array-container';


export declare class PublicArrayGetterRemover extends PublicArrayContainer {
	constructor(data?: any[]);


	byIndex(index: any): any;


	byIndexes(indexes: any): any[];


	head(numItemsToRemove: any): any[];


	tail(numItemsToRemove: any): any[];


	between(numItemsToKeepAtEachEnd: any): any[];


	adjacentAt(startingIndex: any, numItemsToRemove: any): any[];


	adjacentToValue(info: IAdjacentToValueInfo): any[];
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


	allAfterFirst(value: any): any[];


	allBeforeFirst(value: any): any[];


	allAfterLast(value: any): any[];


	allBeforeLast(value: any): any[];


	duplicates(): any[];


	/************
	 These last 2 methods both return an array of IValueIndexPairs.  A IValueIndexPair looks like this:
	 {value: any,  index: number}

	 Each one represents a removed item.
	 ************/
	byTest(testFunction: (currentValue: any, currentIndex?: any, array?: any) => boolean): IValueIndexPair[];


	byType(type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'): IValueIndexPair[];
}
