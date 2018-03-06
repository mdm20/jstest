'use strict';

import { LoyaltyExpressDropdown } from './dropdown/dropdown';
import { LoyaltyExpressAjax } from './ajax/ajax';

class LoyaltyExpress
{  
    readonly Dropdown: LoyaltyExpressDropdown;
    readonly Ajax: LoyaltyExpressAjax;

    constructor(urlBase?) {
      this.Dropdown = new LoyaltyExpressDropdown(urlBase);
      this.Ajax = new LoyaltyExpressAjax(urlBase);
    }
}

window['LoyaltyExpress'] =  new LoyaltyExpress('XXXXXXXX');