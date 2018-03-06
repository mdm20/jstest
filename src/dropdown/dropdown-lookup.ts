'use strict';

import { DropdownLookupItem } from "./dropdown-lookup-item";
import { DropdownFunctions } from "./dropdown-functions";

export class DropdownLookup
{
    private lookup;
    private funcs;

    constructor() {
        this.funcs = new DropdownFunctions();
        this.initializeLookupData();
    }

    public getDropdownLookupItem(str: string) : DropdownLookupItem
    {
        let result: DropdownLookupItem = this.lookup.find(o => o.identifier === str);
        return result;
    }

    private initializeLookupData()
    {
        this.lookup = [];
        this.lookup.push(new DropdownLookupItem('HOURS_MIL', 'key', 'value', this.funcs.getMilHours));
        this.lookup.push(new DropdownLookupItem('MINS', 'key', 'value', this.funcs.getMinutes));
        this.lookup.push(new DropdownLookupItem('PAYMENT_METHOD', 'PaymentMethodTypeId', 'PaymentMethodTypeDscr'));
        this.lookup.push(new DropdownLookupItem('INCLUDE_ON_CARD', 'IncludeOnCardId', 'IncludeOnCardDscr'));
        this.lookup.push(new DropdownLookupItem('ALERTS_STATUS_TYPES', 'AlertStatusTypeId', 'AlertStatusTypeDscr', null, this.funcs.addAlertStatusTypes));

              // this.lookup.push(new DropdownLookupItem('sp500', 'IncludeOnCardId', 'IncludeOnCardDscr', 'ENTRY_STATUS_TYPES'));






      // this.lookup.push(new DropdownLookupItem('sp500', 'OfferingId', 'OfferingName'));

        //this.lookup = {};
        //this.lookup.sp500 =  new DropdownLookupItem('OfferingId', 'OfferingName');
       // this.lookup.sp501 =  new DropdownLookupItem('ContactStatusTypeId', 'ContactStatusTypeDscr');
       // this.lookup.sp502 =  new DropdownLookupItem('ContactTypeId', 'ContactTypeDscr');
        ///this.lookup.sp503 =  new DropdownLookupItem('ContactCategoryTypeId', 'ContactCategoryTypeDscr');
    }
}


























