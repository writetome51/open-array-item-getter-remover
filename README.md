# PublicArrayGetterRemover

An array-manipulating TypeScript/JavaScript class with methods that both remove   
and return items from the array.

To include in your project:

    // if using TypeScript:
    import {PublicArrayGetterRemover} from '@writetome51/public-array-getter-remover';
    // if using ES5 JavaScript:
    var PublicArrayGetterRemover = require('@writetome51/public-array-getter-remover').PublicArrayGetterRemover;


To instantiate, pass the actual array it will contain into its constructor:

    let getAndRemove = new PublicArrayGetterRemover( [item1, item2, item3,...] );

You can also reset the array by accessing the class `.data` property:

    getAndRemove.data = [1,2,3,4,...];
    

## Properties

	data : any[] (read-writable) // the actual array
	
	
## Methods


	byIndex(index): any
        // removes and returns item identified by index.  index can be negative or positive.

	byIndexes(indexes): any[]
	    // removes and returns items identified by indexes.  indexes can be negative or positive.

	head(numItemsToRemove): any[]
	    // removes and returns numItemsToRemove from beginning of this.data

	tail(numItemsToRemove): any[]
	    // removes and returns numItemsToRemove from end of this.data

	between(numItemsToKeepAtEachEnd): any[]
        // removes and returns middle of this.data, between numItemsToIgnoreAtEachEnd

	adjacentAt(startingIndex, numItemsToRemove): any[]
	    // Beginning at startingIndex, removes and returns adjacent numItemsToRemove.  
        // startingIndex can be negative or positive.



NOTICE:  For all the functions below, the parameter `value` cannot be an object.

    adjacentToValue(info): any[]
        /**************
        removes and returns adjacent items including, or near, a particular value.
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
        **************/
            
    
	allAfterFirst(value: any): any[]
	    // removes and returns everything after first instance of value

	allBeforeFirst(value: any): any[]
	    // removes and returns everything before first instance of value

	allAfterLast(value: any): any[]
        // removes and returns everything after last instance of value

	allBeforeLast(value: any): any[]
	    // removes and returns everything before last instance of value

	duplicates(): any[]
	    // removes and returns every instance of a duplicate, so you may get multiple instances.

	
The last 2 methods below return an array of IValueIndexPairs.   
A IValueIndexPair looks like this:  `{value: any,  index: integer}`  
It represents an array item.

	byTest(testFunction: (currentValue, currentIndex?, array?) => boolean): IValueIndexPair[]
	    // removes and returns any item that passes test.

	byType(
	    type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'
	): IValueIndexPair[]
        // removes and returns any item of the passed type.