

export enum BillingType {
    visa,
    paypal,
    bitcoin
}

export default interface BillingInfo {
    billingAccount: string,
    billingType: BillingType,
    billingDetailsMisc: string,
}