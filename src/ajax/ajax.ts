'use strict';

export class LoyaltyExpressAjax
{ 
    private latestSessionCheck: Date;
    private urlBase: string;

    constructor(urlBase?) {
        if (urlBase === undefined)
            this.urlBase = '';
        else
            this.urlBase = urlBase;
    }

    public sessionCheck() {
        let deferred = $.Deferred();
        let now: Date = new Date();
    
        if (!this.latestSessionCheck)
            this.latestSessionCheck = now;

        let elapsed: number = now.getTime() - this.latestSessionCheck.getTime();
    
        if (elapsed > 10 && elapsed < 300000)
            deferred.resolve('PROCEED');
        else {
            let url = this.urlBase + '/includeAjax/sessionCheck.asp';
            $.post(url, function (data) {
                if (data === 'PROCEED')
                    deferred.resolve('PROCEED')
                else
                    deferred.reject(new Error('SESSION_TIMEOUT'));
            });
        }
        
        this.latestSessionCheck = now;
        return deferred.promise();
    }
    
    public getJsonData(url: string, qs: string) 
    {
        let deferred = $.Deferred();
        let fullUrl = this.urlBase + url;

        this.sessionCheck()
            .then(() => {
                return $.ajax({
                    type: "POST",
                    url: fullUrl,
                    data: qs,
                    success: (data) => { 
                        deferred.resolve(data); 
                    },
                    error: (error) => { 
                        deferred.reject(error);            
                    },
                    dataType: 'json'
                });  
            })
            .then((json) => {
                deferred.resolve(json);
            })
            .catch((e) => {
                deferred.reject(e);
            });

        return deferred.promise();
    }
}