'use strict'

export class DropdownFunctions
{  
    public getMilHours()
    {
        let results: any[] = [];
        for (let i = 6; i < 22; i++)
        {
            let hour: number = i;
            if (i > 12) hour = i - 12;
        
            let ampm: string = 'AM';
            if (i >= 12) ampm = 'PM';

            results.push({ key: i, value:  hour + ' ' + ampm })
        }
        return results;
    }

    public getMinutes()
    {
        let results: any[] = [];

        for (let i = 0; i < 70; i+=10)
            results.push({ key: i, value:  i + ' Min' })
        
        return results;
    }

    public addAlertStatusTypes(data: any[])
    {
        let result = [];
        result.push( { 'AlertStatusTypeId': 0, 'AlertStatusTypeDscr':  'All Alerts' } );
        if (data !== undefined)
        {
            for (let i = 0; i < data.length; i++)
            result.push(data[i]);
        }
        result.push( { 'AlertStatusTypeId': -1, 'AlertStatusTypeDscr':  'Open Alerts - Not Viewed Yet' } );
        return result;
    }

}