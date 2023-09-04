
const enum exportStatus {
    paid,
    notPaid,
    notified,
    removed,
    voided,
    credited,
}

export default interface BillingRecord {
    date: Date,
    description: string,
    periodOfService: string,
    paidOn: Date,
    notifiedCustomer: Date,
    amount: number,
    status: exportStatus
}