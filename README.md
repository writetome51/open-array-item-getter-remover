# PublicArrayGetterRemover

An array-manipulating TypeScript/JavaScript class with methods that both remove   
and return items from the array.


## Constructor
```
constructor(data? = [])  // 'data' becomes the array the class manipulates.
```

You can also reset the array by accessing the class `.data` property:
```
this.data = [1,2,3,4];
```

## Properties
```
data : any[]  // the actual array

className: string (read-only)
```
	
	
## Methods
```
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
```
NOTICE:  For all the functions below, the parameter `value` cannot be an object.  
It can be an array, as long as the array doesn't contain objects.
```
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
            
allAfterFirst(value): any[]
    // removes and returns everything after first instance of value

allBeforeFirst(value): any[]
    // removes and returns everything before first instance of value

allAfterLast(value): any[]
    // removes and returns everything after last instance of value

allBeforeLast(value): any[]
    // removes and returns everything before last instance of value

duplicates(): any[]
    // removes and returns every instance of a duplicate, so you may get multiple instances.
```

The next 2 methods return an array of IValueIndexPairs.   
A IValueIndexPair looks like this:  `{value: any,  index: integer}`  
It represents an array item.
```
byTest(testFunction: (currentValue, currentIndex?, array?) => boolean): IValueIndexPair[]
    // removes and returns any item that passes testFunction.

byType(
    type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'
): IValueIndexPair[]
    // removes and returns any item of the passed type.
``` 
The methods below are not important to know about in order to use this  
class.  They're inherited from [BaseClass](https://github.com/writetome51/typescript-base-class#baseclass) .
``` 
protected   _createGetterAndOrSetterForEach(
		propertyNames: string[],
		configuration: IGetterSetterConfiguration
	   ) : void
    /*********************
    Use this method when you have a bunch of properties that need getter and/or 
    setter functions that all do the same thing. You pass in an array of string 
    names of those properties, and the method attaches the same getter and/or 
    setter function to each property.
    IGetterSetterConfiguration is this object:
    {
        get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function,
	    // get_setterFunction takes the property name as first argument and 
	    // returns the setter function.  The setter function must take one 
	    // parameter and return void.
	    
        get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function
	    // get_getterFunction takes the property name as first argument and 
	    // returns the getter function.  The getter function must return something.
    }
    *********************/ 
	   
	   
protected   _returnThis_after(voidExpression: any) : this
    // voidExpression is executed, then function returns this.
    // Even if voidExpression returns something, the returned data isn't used.

protected   _runMethod_and_returnThis(
    callingObject, 
    method: Function, 
    methodArgs: any[], 
    additionalAction?: Function // takes the result returned by method as an argument.
) : this
```

## Inheritance Chain

PublicArrayGetterRemover<--[PublicArrayContainer](https://github.com/writetome51/public-array-container#publicarraycontainer)<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)


## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm install @writetome51/public-array-getter-remover
```

## Loading

    // if using TypeScript:
    import {PublicArrayGetterRemover} from '@writetome51/public-array-getter-remover';
    // if using ES5 JavaScript:
    var PublicArrayGetterRemover = 
	 require('@writetome51/public-array-getter-remover').PublicArrayGetterRemover;



## License
[MIT](https://choosealicense.com/licenses/mit/)