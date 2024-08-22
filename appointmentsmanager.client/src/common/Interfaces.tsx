/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IDistribution {
    id: number;
    name: string;
    agency: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: number;
    handmail: boolean;
    fax: string;
    deliverymethod: string;
    email: string;
    phone: string;
    address: string;
}

export interface IDistributionRecipient extends IDistribution {
    LastName: string;
    FirstName: string;
    Email: string;
    MailingList: string;
    Partner: string;
    Procurement_type: string;
    RfpNo: number;
    Target_mm: number;
    Target_yyyy: number;
    Division: string;
}

export interface HeaderFormSectionProps {
    consultantValue: string;
    projectValue: string;
    input1Value: string;
    input2Value: string;
    input3Value: string;
    input4Value: string;
    control: any;
    errors: {
        Consultant?: any;
        Project?: any;
    };
}

export interface IContracts {
    CP1No: number;
    Vendor: string;
    Effective: string;
    Expiration: string;
    Total: number;
    Contract: boolean;
    Status: string;
    Repl: string;
    Void: string;
    VoidDate: string;// date;
    VoidReason: string;
}

export interface IApprovalInfo {
    Level: number;
    Approved: string;
    Approved_tds: string;
}

export interface IPickAgency {
    id: number;
    AgencyName: string;
    Division: string;
    SaasCode: string;
    AgencyCode: string;
    Address1: string;
    Address2: string;
    City: string;
    State: string;
    Zip: number;
    Header1: string;
    HandMail: boolean;
}

export interface IPickProject {
    project_id: number;
    pu: string;
    proj_desc: string;
    Agency_name: string;
    Task_description: string;
    Proc_Category: string;
    Bid_categroy: string;
    Approval_cat: string;
    MM: number;
    YYYY: number;
    Rfp_number: number;
    Procurement_Type: string;
    Agency_add1: string;
    Agency_add2: string;
    Agency_city: string;
    Agency_state: string;
    Agency_zip5: number;
    Agency_zip4: number;
    Agency_department: string;
    Agency_use: string;
    Contact_title: string;
    Contact_fname: string;
    Contact_mname: string;
    Contact_lname: string;
    Contact_type: string;
}

export interface ICP1 {
    id: number;
    Appr: number;
    S: string;
    PrNo: string;
    Cp1no: number;
    contract: string;
    Replacement: string;
    AgySAAScode: number;
    PartnerCode: number;
    Partner: string;
    MptMagiccode: number;
    MptName: string;
    vendorMagiccode: number;
    VendorName: string;
    Frequency: string;
    Total: number;
    Acquisition: string;
    Approval: string;
    AthtyDate: string //date;
    ApprovedBy: string;
    AprrDate: string //date;
    RollDate: string //date;
    Add_UserID: string;
    Add_tds: string //date;
    Mod_UserID: string;
    Mod_tds: string //date;
    OldOrderVenCode: string;
    OldMPTCde: string;
}

export interface IComposite {
    agency: IPickAgency | null;
    recipient: IDistributionRecipient | null;
    project: IPickProject | null;
}