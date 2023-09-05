import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class FrontEndStripeService {
  private readonly stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2020-08-27',
    });
  }

  async createPayment(amountInCents: number, currency: string = 'usd'): Promise<Stripe.PaymentIntent> {
    return this.stripe.paymentIntents.create({
      amount: amountInCents, // Amount should be in cents
      currency,
      payment_method_types: ['card'],
    });
  }
}
