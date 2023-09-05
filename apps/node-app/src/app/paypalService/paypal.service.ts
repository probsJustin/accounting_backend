import { Injectable } from '@nestjs/common';
import * as paypal from 'paypal-rest-sdk';

/*
You need to replace http://return.url and http://cancel.url with your own URLs. The return URL is where PayPal redirects after a successful payment, while the cancel URL is where PayPal redirects if the customer decides to cancel the payment. (not sure this is needed since this is a backend request)
Ensure you have the necessary environment variables (PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET) correctly set up.
The above example uses PayPal's sandbox mode. For production, you should change the mode configuration from 'sandbox' to 'live'.
*/

@Injectable()
export class PaypalService {
  private readonly clientID: string;
  private readonly clientSecret: string;

  constructor() {
    this.clientID = process.env.PAYPAL_CLIENT_ID;
    this.clientSecret = process.env.PAYPAL_CLIENT_SECRET;

    paypal.configure({
      mode: 'sandbox', // Change this to 'live' in production
      client_id: this.clientID,
      client_secret: this.clientSecret,
    });
  }

  async createPayment(amount: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const createPaymentJson = {
        intent: 'sale',
        payer: {
          payment_method: 'paypal',
        },
        redirect_urls: {
          return_url: 'http://return.url',
          cancel_url: 'http://cancel.url',
        },
        transactions: [
          {
            item_list: {
              items: [
                {
                  name: 'Billing Transaction',
                  sku: 'item',
                  price: amount,
                  currency: 'USD',
                  quantity: 1,
                },
              ],
            },
            amount: {
              currency: 'USD',
              total: amount,
            },
            description: 'Billing transaction description.',
          },
        ],
      };

      paypal.payment.create(createPaymentJson, (error, payment) => {
        if (error) {
          reject(error);
        } else {
          resolve(payment);
        }
      });
    });
  }
}