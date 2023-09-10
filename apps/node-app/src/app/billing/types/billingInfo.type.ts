

export enum BillingType {
    VISA,
    PAYPAL,
    BITCOIN,
    STRIPE
}

export class BillingInfo {
    billingAccount: string;
    billingType: string;
    billingDetailsMisc: string;
}