import { isArray } from 'basic-data-handling/isArray_notArray';
import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';
import { getAndRemoveAdjacentAt } from '@writetome51/array-get-and-removers-basic/getAndRemoveAdjacentAt';
import { getAndRemoveHead } from '@writetome51/array-get-and-removers-basic/getAndRemoveHead';
import { getAndRemoveTail } from '@writetome51/array-get-and-removers-basic/getAndRemoveTail';
import { getAndRemoveItem } from '@writetome51/array-get-and-removers-basic/getAndRemoveItem';
import { getAndRemoveMiddle } from '@writetome51/array-get-and-removers-basic/getAndRemoveMiddle';
import { getAndRemoveAllAfterFirst }
	from '@writetome51/array-get-and-remove-all-before-or-after-public/getAndRemoveAllAfterFirst';
import { getAndRemoveAllBeforeFirst }
	from '@writetome51/array-get-and-remove-all-before-or-after-public/getAndRemoveAllBeforeFirst';
import { getAndRemoveAllAfterLast }
	from '@writetome51/array-get-and-remove-all-before-or-after-public/getAndRemoveAllAfterLast';
import { getAndRemoveAllBeforeLast }
	from '@writetome51/array-get-and-remove-all-before-or-after-public/getAndRemoveAllBeforeLast';
import { getAndRemoveAdjacentToValue }
	from '@writetome51/array-get-and-remove-adjacent-to-value/getAndRemoveAdjacentToValue';
import { getAndRemoveFilteredResults }
	from '@writetome51/array-get-and-removers-filtered-results-duplicates/getAndRemoveFilteredResults';
import { getAndRemoveDuplicates }
	from '@writetome51/array-get-and-removers-filtered-results-duplicates/getAndRemoveDuplicates';
import { OpenArrayContainer } from '@writetome51/open-array-container/OpenArrayContainer';


export class OpenArrayItemGetterRemover extends OpenArrayContainer {


	constructor(data = []) {
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


	middle(numItemsToKeepAtEachEnd): any[] {
		return getAndRemoveMiddle(numItemsToKeepAtEachEnd, this.data);
	}


	// startingIndex can be negative or positive.

	adjacentAt(startingIndex, numItemsToRemove): any[] {
		return getAndRemoveAdjacentAt(startingIndex, numItemsToRemove, this.data);
	}


	// info = {value: anyExceptObject, offset: number, howMany: number}
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


	// testFunction has same signature as callback passed to array.filter():
	byTest(testFunction): any[] {
		return getAndRemoveFilteredResults(testFunction, this.data);
	}


	byType(type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'): any[] {
		if (type === 'array') {
			return this.byTest((item) => {
				return (isArray(item));
			});
		}
		else {
			return this.byTest((item) => {
				return (typeof item === type);
			});
		}
	}


}
