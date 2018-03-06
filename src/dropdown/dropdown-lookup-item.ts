'use strict'

export class DropdownLookupItem
{    
    readonly identifier: string; // the last part of the name of the previous function.  ie: LE_FORM_SELECT_HOURS_MIL would be HOURS_MIL
    readonly key: string;
    readonly val: string;
    readonly func: any;      // an optional function that returns the values, instead of from the database
    readonly addFunc: any;   // an optional function that adds stuff to the result set after it's retrieved

    constructor(identifier: string, key: string, val: string, func?: any, addFunc?: any)
    {
        this.identifier = identifier;
        this.key = key;
        this.val = val;
        this.func = func;
        this.addFunc = addFunc;
    }
}