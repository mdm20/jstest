# Loyalty Express common javascript library

### Prerequisite: 
 - Requires git to be installed.
 - You need to have access to the git repository where the project is stored.
 - This library relies on JQuery, so JQuery should be loaded before using this.
 - Building the project requires Node to be installed (for NPM, which is a package manager)

## Installation Procedure
    1.  Clone repository from git (this will make a new folder).  git clone <repo url>
    2.  Open cmd or PowerShell
    3.  Navigate to the folder created from clone
    4.  Type npm install
    5.  Type npm run build (or npm run builddev for development)
    6.  After doing all this, you should have a loyaltyexpress.js file in the dist folder

## Key features

 - Easy dropdown population
 - Simplified ajax->json requests
 - Validation

## Using the library

To ensure compatability with existing javascript, the library adds an object to the global scope.  The object is named LoyaltyExpress.  The
various capabilities are subobjects inside the LoyaltyExpress object.  For instance, operations pertaining to dropdowns are in the
LoyaltyExpress.Dropdowns object.

### Dropdowns

Previously, dropdowns were populated before the page loaded.  The values for each select were stored in the Session object, for each user.  This
library moved that functionality to the client.  Selects should be populated after the page loads.  

Stored procedure names aren't stored in the client.  There's a mapping from an identifier to the stored procedure in the server side code.  The
identifier is the last part of the ASP Function that previously was used.  For instance, if you used ***FORM_SELECT_ALERTS_STATUS_TYPES*** previously,
the identifier you should use now is ***ALERTS_STATUS_TYPES***.

This is the code required to populate a select

```javascript
    let dd = LoyaltyExpress.Dropdown;            
    dd.populate("ALERTS_STATUS_TYPES", null, $("#selOffering"), false, params[1]);
```

The parameters for LoyaltyExpress.Dropdown.populate are:

1.  The identifier to which the stored proecedure is linked.
2.  Any argument that the SP requires, in the form or a normal query string.  ie:  name=jim&id=21
3.  A JQuery selector.  ie: $("#selOffering")
4.  A flag to use the meta database instead of the default.  If targetting meta, set this to true
5.  The default option value to be selected, if applicable

NOTE: CorpUserId and CorpAcctId parameters are autopopulated with every request.  You dont have to include them.





