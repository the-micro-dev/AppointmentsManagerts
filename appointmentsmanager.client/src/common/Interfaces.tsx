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