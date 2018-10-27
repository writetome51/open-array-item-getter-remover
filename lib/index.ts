import { isArray } from 'basic-data-handling/isArray_notArray';
import { errorIfNotString } from 'basic-data-handling/errorIfNotString';
import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';
import { getAndRemoveAdjacentAt } from '@writetome51/array-get-and-remove-adjacent-at/getAndRemoveAdjacentAt';
import { getAndRemoveAdjacentToValue }
	from '@writetome51/array-get-and-remove-adjacent-to-value/getAndRemoveAdjacentToValue';
import { getAndRemoveBetween } from '@writetome51/array-get-and-remove-between';
import { getAndRemoveHead } from '@writetome51/array-get-and-remove-head-tail/getAndRemoveHead';
import { getAndRemoveTail } from '@writetome51/array-get-and-remove-head-tail/getAndRemoveTail';
import { getAndRemoveItem } from '@writetome51/array-get-and-remove-item';
import { getAndRemoveAllAfterFirst }
	from '@writetome51/array-get-and-remove-all-after/getAndRemoveAllAfterFirst';
import { getAndRemoveAllAfterLast }
	from '@writetome51/array-get-and-remove-all-after/getAndRemoveAllAfterLast';
import { getAndRemoveAllBeforeFirst }
	from '@writetome51/array-get-and-remove-all-before/getAndRemoveAllBeforeFirst';
import { getAndRemoveAllBeforeLast }
	from '@writetome51/array-get-and-remove-all-before/getAndRemoveAllBeforeLast';
import { getAndRemoveFilteredResults } from '@writetome51/array-get-and-remove-filtered-results';
import { getAndRemoveDuplicates } from '@writetome51/array-get-and-remove-duplicates';
import { PublicArrayContainer } from '@writetome51/public-array-container';


export class PublicArrayItemGetterRemover extends PublicArrayContainer {


	constructor(data: any[] = []) {
		super(data);
	}


	// These functions modify the array and return the removed data:


	// index can be negative or positive.
	item(index): any {
		return getAndRemoveItem(index, this.data);
	}


	head(numItemsToRemove): any[] {
		return getAndRemoveHead(numItemsToRemove, this.data);
	}


	tail(numItemsToRemove): any[] {
		return getAndRemoveTail(numItemsToRemove, this.data);
	}


	between(numItemsToKeepAtEachEnd): any[] {
		return getAndRemoveBetween(numItemsToKeepAtEachEnd, this.data);
	}


	// startingIndex can be negative or positive.

	adjacentAt(startingIndex, numItemsToRemove): any[] {
		return getAndRemoveAdjacentAt(startingIndex, numItemsToRemove, this.data);
	}


	// info = {value: anyExceptObject,  offset: integer,  howMany: integer greater than zero}
	adjacentToValue(info: IAdjacentToValueInfo): any[] {
		return getAndRemoveAdjacentToValue(info, this.data);
	}


	// For all the functions below, the parameter 'value' cannot be object.

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


	duplicates(): any[] {
		return getAndRemoveDuplicates(this.data);
	}


	// These last 2 methods both return an array of objects that match this interface:
	// {value: any,  index: number}
	//
	// Each object represents a removed item and its index.

	byTest(testFunction: (currentValue, currentIndex?, array?) => boolean): object[] {
		return getAndRemoveFilteredResults(testFunction, this.data);
	}


	byType(type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'): object[] {
		errorIfNotString(type);
		// @ts-ignore
		type = type.toLowerCase();
		if (type === 'array') return this.byTest((item) => isArray(item));

		else return this.byTest((item) => typeof item === type);
	}


}
