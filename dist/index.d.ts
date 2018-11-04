import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';
import { IValueIndexPair } from 'value-index-pair-interface/IValueIndexPair';
import { PublicArrayContainer } from '@writetome51/public-array-container';


export declare class PublicArrayItemGetterRemover extends PublicArrayContainer {
	constructor(data?: any[]);


	byIndex(index: any): any;


	head(numItemsToRemove: any): any[];


	tail(numItemsToRemove: any): any[];


	between(numItemsToKeepAtEachEnd: any): any[];


	adjacentAt(startingIndex: any, numItemsToRemove: any): any[];


	adjacentToValue(info: IAdjacentToValueInfo): any[];


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
