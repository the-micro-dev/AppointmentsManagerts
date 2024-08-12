

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