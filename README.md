To include in your project:

    import {PublicArrayGetterRemover} from '@writetome51/public-array-getter-remover';

PublicArrayGetterRemover has several methods that both remove and return items from
the array.

To instantiate, pass the actual array it will contain into its constructor:

    let getAndRemove = new PublicArrayGetterRemover( [item1, item2, item3,...] );

You can also reset the array by accessing the class 'data' property:

    getAndRemove.data = [1,2,3,4,...];


  These are all its methods:


	// index can be negative or positive.
	byIndex(index): any


	// indexes can be negative or positive.
	byIndexes(indexes): any[]


	head(numItemsToRemove): any[]


	tail(numItemsToRemove): any[]


    // Returns middle of array, between numItemsToIgnoreAtEachEnd
	between(numItemsToKeepAtEachEnd): any[]


	// startingIndex can be negative or positive.
	adjacentAt(startingIndex, numItemsToRemove): any[]


	adjacentToValue(info): any[]
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


	// For all the functions below, the parameter 'value' cannot be object.
    
    
    // Removes and returns everything after first instance of value
	allAfterFirst(value: any): any[]


    // Removes and returns everything before first instance of value
	allBeforeFirst(value: any): any[]


    // Removes and returns everything after last instance of value
	allAfterLast(value: any): any[]


    // Removes and returns everything before last instance of value
	allBeforeLast(value: any): any[]

    
    // removes and returns every instance of a duplicate, so you may receive multiple instances.
	duplicates(): any[]


	/************
    These last 2 methods both return an array of IValueIndexPairs.  A IValueIndexPair looks like this:

    	 {value: any,  index: number}

   	Each one represents a removed item.
    ************/

    // Gets and removes any value that passes test:
	byTest(testFunction: (currentValue, currentIndex?, array?) => boolean): IValueIndexPair[]


	byType(
	    type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'
	): IValueIndexPair[]
