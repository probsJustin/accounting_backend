

const enum billingType {
    visa,
    paypal,
    bitcoin
}

export default interface BillingInfo {
    billingAccount: string,
    billingType: billingType,
    billingDetailsMisc: string,
}