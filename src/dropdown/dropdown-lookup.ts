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
        this.lookup.push(new DropdownLookupItem('DURATION', 'key', 'value', this.funcs.getDuration));
        this.lookup.push(new DropdownLookupItem('PAYMENT_METHOD', 'PaymentMethodTypeId', 'PaymentMethodTypeDscr'));
        this.lookup.push(new DropdownLookupItem('INCLUDE_ON_CARD', 'IncludeOnCardId', 'IncludeOnCardDscr'));
        this.lookup.push(new DropdownLookupItem('ENTRY_STATUS_TYPES', 'CalendarEntryStatusTypeId', 'CalendarEntryStatusTypeDscr'));
        this.lookup.push(new DropdownLookupItem('ALERTS_STATUS_TYPES', 'AlertStatusTypeId', 'AlertStatusTypeDscr', null, this.funcs.addAlertStatusTypes));
        this.lookup.push(new DropdownLookupItem('TASK_STATUS_TYPES', 'TaskStatusTypeId', 'TaskStatusTypeDscr'));
        this.lookup.push(new DropdownLookupItem('STATES', 'StateCd', 'StateName'));
        this.lookup.push(new DropdownLookupItem('ACTIVITY_TXN_TYPES', 'ActivityTypeId', 'ActivityTypeDscr'));
        this.lookup.push(new DropdownLookupItem('ACTIVITY_PRODUCT_TYPES', 'ActivityProductTypeId', 'ActivityProductTypeDscr'));
        this.lookup.push(new DropdownLookupItem('ACTIVITY_PROPERTY_TYPES', 'PropertyTypeId', 'PropertyTypeDscr'));
        this.lookup.push(new DropdownLookupItem('ACTIVITY_PROPERTY_USE_TYPES', 'PropertyUseId', 'PropertyUseDscr'));
        this.lookup.push(new DropdownLookupItem('ACTIVITY_AMORT_TYPES', 'ActivityAmortizationTypeId', 'ActivityAmortizationTypeDscr'));
        this.lookup.push(new DropdownLookupItem('ACTIVITY_LIEN_POS_TYPES', 'ActivityLienPositionTypeId', 'ActivityLienPositionTypeDscr'));
        this.lookup.push(new DropdownLookupItem('CONTACT_TYPES', 'ContactTypeId', 'ContactTypeDscr'));
        this.lookup.push(new DropdownLookupItem('CONTACT_STATUS_TYPES', 'ContactStatusTypeId', 'ContactStatusTypeDscr'));
        this.lookup.push(new DropdownLookupItem('CONTACT_CATEGORY_TYPES', 'ContactCategoryTypeId', 'ContactCategoryTypeDscr'));
        this.lookup.push(new DropdownLookupItem('ENTRY_METHOD_TYPES', 'EntryMethodTypeId', 'EntryMethodTypeDscr'));

       // TODO - these have additional logic server side
       // this.lookup.push(new DropdownLookupItem('OFFERING_AND_PRICING', 'EntryMethodTypeId', 'EntryMethodTypeDscr'));
       // this.lookup.push(new DropdownLookupItem('OFFERING_AND_PRICING_BY_CATEGORY', 'OfferingId', 'OfferingName'));
       // this.lookup.push(new DropdownLookupItem('OFFERING_AND_PEND_ORDER_PRICING', 'EntryMethodTypeId', 'EntryMethodTypeDscr'));
       // this.lookup.push(new DropdownLookupItem('OFFERING_AND_PEND_ORDER_PRICING_BY_CATEGORY', 'OfferingId', 'OfferingName'));

        this.lookup.push(new DropdownLookupItem('OFFERING_WITH_PRICES', 'OfferingId', 'OfferingName'));
        this.lookup.push(new DropdownLookupItem('OFFERING', 'CorpAcctId', 'CorpAcctName'));
        this.lookup.push(new DropdownLookupItem('OFFERING_SPECIFIC_DETAIL', 'OptionTxt', 'OptionTxt'));
        this.lookup.push(new DropdownLookupItem('CC_TYPE', 'CCTypeId', 'CCTypeDscr'));
        this.lookup.push(new DropdownLookupItem('AUTO_APPRV_DAYS', 'key', 'value', this.funcs.getAutoApproveDays));
        this.lookup.push(new DropdownLookupItem('DEFAULT_PAYMENT_TYPE', 'PaymentMethodTypeId', 'PaymentMethodTypeDscr'));
        this.lookup.push(new DropdownLookupItem('BRANCH_SELECT', 'BranchId', 'BranchName'));
        this.lookup.push(new DropdownLookupItem('REGION_SELECT', 'RegionId', 'RegionName'));
        this.lookup.push(new DropdownLookupItem('DIVISION_SELECT', 'DivisionId', 'DivisionName'));
        this.lookup.push(new DropdownLookupItem('CONTACT_ACTIVITY_SELECT', 'ActivityId', 'ActivityDscr'));
        this.lookup.push(new DropdownLookupItem('USER_STATUS_SELECT', 'UserStatusTypeId', 'UserStatusTypeDscr'));
        this.lookup.push(new DropdownLookupItem('SOURCE_OF_BUSINESS_SELECT', 'SourceOfBusinessTypeId', 'SourceOfBusinessTypeDscr'));

        // TODO - support unnamed paremeters
        //this.lookup.push(new DropdownLookupItem('REPORT_PARAMETERS_SELECT', 'SourceOfBusinessTypeId', 'SourceOfBusinessTypeDscr'));
        
        this.lookup.push(new DropdownLookupItem('CONTACT_MARKETING_TYPE_SELECT', 'ContactMarketingTypeId', 'ContactMarketingTypeDscr'));
        this.lookup.push(new DropdownLookupItem('LANGUAGE_SELECT', 'LanguageId', 'LanguageName'));
        this.lookup.push(new DropdownLookupItem('ACTIVITY_STATUS_SELECT', 'ActivityStatusTypeId', 'ActivityStatusTypeDscr'));
        this.lookup.push(new DropdownLookupItem('CUSTOMER_ACTIVITY_SELECT', 'CustomerActivityFilterId', 'CustomerActivityFilterDscr'));

        // TODO - non standard option creation
        //this.lookup.push(new DropdownLookupItem('CAMPAIGN_STATE_SELECT', 'CustomerActivityFilterId', 'CustomerActivityFilterDscr'));

        // - non standard options create
        //this.lookup.push(new DropdownLookupItem('CAMPAIGN_DISPOSITION_SELECT', 'CustomerActivityFilterId', 'CustomerActivityFilterDscr'));

        this.lookup.push(new DropdownLookupItem('MONTH_SELECT', 'MonthNbr', 'MonthAbbrev'));
        this.lookup.push(new DropdownLookupItem('ACTIVITY_TYPE_SELECT', 'ActivityTypeId', 'ActivityTypeDscr'));
        this.lookup.push(new DropdownLookupItem('TIME_OF_DAY_SELECT', 'BestTimeToCallTypeId', 'BestTimeToCallTypeDscr'));
        this.lookup.push(new DropdownLookupItem('CONTACT_AVAILABLE_CAMPAIGNS_SELECT', 'CampaignId', 'CampaignName'));
        this.lookup.push(new DropdownLookupItem('ALERT_DETAIL_STATE', 'AlertDetailStateId', 'AlertDetailStateDscr'));
        this.lookup.push(new DropdownLookupItem('PROSPECT_REASONS', 'ReasonId', 'ReasonDscr'));
        this.lookup.push(new DropdownLookupItem('PROSPECT_PURPOSE_OF_LOAN', 'PurposeOfLoanId', 'PurposeOfLoanDscr'));
        this.lookup.push(new DropdownLookupItem('LANG_SPECIFIC_CORP_USER', 'CorpUserId', 'LoanOfficerName'));
        this.lookup.push(new DropdownLookupItem('BEST_TIME_TO_CALL', 'BestTimeToCallTypeId', 'BestTimeToCallTypeDscr'));
        this.lookup.push(new DropdownLookupItem('PROSPECT_STATUS', 'ProspectStatusId', 'ProspectStatusDscr'));
        this.lookup.push(new DropdownLookupItem('CLOSING_RATING', 'ClosingRatingId', 'ClosingRatingDscr'));
        this.lookup.push(new DropdownLookupItem('STANDARD_LOAN_TYPE', 'StdLoanTypeId', 'StdLoanTypeDscr'));
        this.lookup.push(new DropdownLookupItem('STANDARD_LOAN_AMORT_TYPE', 'StdLoanAmortizationTypeId', 'StdLoanAmortizationTypeDscr'));
        this.lookup.push(new DropdownLookupItem('CONTACT_CATEGORIZATION', 'ContactCategorizationTypeId', 'ContactCategorizationTypeDscr'));
        this.lookup.push(new DropdownLookupItem('REO_LISTING_STATUS', 'REOPropertyStatusTypeId', 'REOPropertyStatusTypeDscr'));
        this.lookup.push(new DropdownLookupItem('REO_APPLICATION_STATUS', 'REOPropertyApplStatusId', 'REOPropertyApplStatusDscr'));
        this.lookup.push(new DropdownLookupItem('DIVISION', 'DivisionId', 'DivisionName'));
        this.lookup.push(new DropdownLookupItem('REGION', 'RegionId', 'RegionName'));
        this.lookup.push(new DropdownLookupItem('BRANCH', 'BranchId', 'BranchName'));
        this.lookup.push(new DropdownLookupItem('CORP_USER', 'CorpUserId', 'CorpUserName'));
        this.lookup.push(new DropdownLookupItem('USER_STATUS', 'UserStatusTypeId', 'UserStatusTypeDscr'));
        this.lookup.push(new DropdownLookupItem('ACTIVE_CAMPAIGN', 'CampaignId', 'CampaignName'));
        this.lookup.push(new DropdownLookupItem('CAMPAIGNS_FOR_LEADS', 'CampaignId', 'CampaignName'));
        this.lookup.push(new DropdownLookupItem('CORP_ROLE', 'CampaignId', 'CampaignName'));
        this.lookup.push(new DropdownLookupItem('CORP_GROUP', 'GroupId', 'GroupName'));
        this.lookup.push(new DropdownLookupItem('CORP_LEAD_GROUP', 'LeadGroupId', 'LeadGroupDscr'));
        this.lookup.push(new DropdownLookupItem('REASSIGN_CAMPAIGN', 'CampaignId', 'CampaignName'));
        this.lookup.push(new DropdownLookupItem('REASSIGNMENT_REASONS', 'ReassignmentReasonTypeId', 'ReassignmentReasonTypeDscr'));
        this.lookup.push(new DropdownLookupItem('DIVISION_REGION_BRANCH', 'BranchId', 'BranchName'));
        this.lookup.push(new DropdownLookupItem('ATONEMENT_STATUS_TYPES', 'CustAtonementStatusTypeId', 'CustAtonementStatusTypeDscr'));
        this.lookup.push(new DropdownLookupItem('ATONEMENT_OFFERINGS', 'OfferingId', 'OfferingName'));
        this.lookup.push(new DropdownLookupItem('OPS_SITE_NAMES', 'OpsSiteName', 'OpsSiteName'));
        this.lookup.push(new DropdownLookupItem('REO_AMC_PERIODS', 'FormattedAsOfDate', 'FormattedAsOfDate'));































    }
}


























