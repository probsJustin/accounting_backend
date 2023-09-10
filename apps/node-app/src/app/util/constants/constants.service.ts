

export class ConstantsService {
    constructor(){
    }
    
    static WEBHOOK_URL = 'https://webhook.site/fdaef537-1a29-4788-985f-db305ceb7f69';






    static ACCOUNT_URI = '/account'
    static BILLING_URI = '/billing'
    static USER_URI = '/user'
    static ACTIONS_URI = '/actions'
    static TRANSACTION_URI = '/transactions'

    static ACTIONS_REFUND_AN_ACCOUNT = '/refund';
    static ACTIONS_BILL_AN_ACCOUNT = '/bill';
    static ACTIONS_GET_TRANSACTIONS = '/transactions';


    static EXAMPLES = {
        UUID: 'ec9a605d-68fe-469e-bd60-7bd4146fbdf6',
        EMAIL: 'koolaidmane@pane_relief_glassworks.com',
        USER_NAME: 'koolaidmane',
        FIRST_NAME: 'Frankie D.',
        LAST_NAME: 'Kool-Aid',
        DESCRIPTION: 'Example description here.',
        ACCOUNT_NAME: 'Pane Relief Glassworks',
        DOLLAR_AMMOUNT: 12.20,
        DATE: '2023-09-10T02:42:52Z',
    }
}
