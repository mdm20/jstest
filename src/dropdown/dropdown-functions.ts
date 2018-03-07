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

    public getDuration()
    {
        let results: any[] = [];
        results.push({ key: 5, value: '5 Minutes' });
        results.push({ key: 10, value: '10 Minutes' });
        results.push({ key: 15, value: '15 Minutes' });
        results.push({ key: 30, value: '30 Minutes' }); 

        for (let i:number = 60; i <= 450; i += 30)
        {
            let hour = (Math.floor(i / 60) >= 1) ? (Math.floor(i / 60) === 1) ? Math.floor(i / 60) + ' Hour' : Math.floor(i / 60) + ' Hours' : '';
            let min  = (i % 60 !== 0) ? ', ' + (i % 60) + ' Minutes' : '';
            results.push({ key: i, value: (hour + min).trim() });
        }
        results.push({ key: 480, value: 'All day' });

        return results;
    }

    public getAutoApproveDays()
    {
        let results: any[] = [];

        for (let i:number = 1; i <= 7; i++)
        {
            if (i === 1)
                results.push({ key: i, value: i + ' Day' });
            else
                results.push({ key: i, value: i + ' Days' });
        }

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