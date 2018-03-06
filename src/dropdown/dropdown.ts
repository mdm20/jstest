'use strict';

import { DropdownLookupItem } from "./dropdown-lookup-item";
import { DropdownLookup } from "./dropdown-lookup";
import { LoyaltyExpressAjax } from "../ajax/ajax";

export class LoyaltyExpressDropdown
{
    private urlBase: string;
    private lookup: DropdownLookup;

    constructor(urlBase?) {
        if (urlBase === undefined)
            this.urlBase = '';
        else
            this.urlBase = urlBase;

        this.lookup = new DropdownLookup();
    }

    public populate(spIdentifier: string, qs: string, selector: JQuery, useMeta:boolean, defaultVal: string)
    { 
        let ddItem: DropdownLookupItem = this.lookup.getDropdownLookupItem(spIdentifier);
        if (ddItem === undefined)
            console.warn('No lookup definitiion found for: ' + spIdentifier);
        else
        {
            if (ddItem.func !== undefined && ddItem.func !== null)
            {
                let data = ddItem.func();
                for (var i = 0; i < data.length; i++)
                {
                    let option: JQuery = this.buildOption(data[i], ddItem, defaultVal);
                    selector.append(option);
                }
            }
            else
            {       
                if (useMeta === undefined) useMeta = false;
                let spId = 'SPInfo=' + spIdentifier;
                if (useMeta === true)
                    spId += ':meta';
         
                 let args = (qs === null) ? spId : spId + '&' + qs;
         
                 let ajax = new LoyaltyExpressAjax(this.urlBase);
                 ajax.getJsonData('/includeAjax/json.asp', args)
                 .then((data) => {
                     if (ddItem.addFunc !== undefined && ddItem.addFunc !== null)
                        data.results = ddItem.addFunc(data.results);  // add some stuff to results

                     for (var i = 0; i < data.results.length; i++)
                     {
                        let option: JQuery = this.buildOption(data.results[i], ddItem, defaultVal);
                        selector.append(option);
                     }
                 });
            }
        }
    }

    private buildOption(jsonData: any, item: DropdownLookupItem, defaultValue: string) : JQuery
    {
        var option = $('<option></option>');
        option.attr('value', jsonData[item.key]);
        if (jsonData[item.key] === defaultValue)
            option.attr('selected', 'selected');
        option.text(jsonData[item.val]);
        return option;
    }
}