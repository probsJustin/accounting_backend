import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class BackEndStripeService {
  private readonly stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-08-16',
    });
  }

  async createToken(cardDetails: Stripe.TokenCreateParams['card']): Promise<Stripe.Token> {
    return this.stripe.tokens.create({
      card: cardDetails,
    });
  }

  async chargeCard(amountInCents: number, token: string, currency: string = 'usd'): Promise<Stripe.Charge> {
    return this.stripe.charges.create({
      amount: amountInCents,
      currency,
      source: token,
      description: 'Sample Charge',
    });
  }
}

/*
Example:
First, create a token:
const cardDetails = {
  number: '4242424242424242',
  exp_month: 12,
  exp_year: 2023,
  cvc: '123'
};

const token = await stripeService.createToken(cardDetails);

Then, use this token to make a charge:
const charge = await stripeService.chargeCard(1000, token.id); // Charging $10

*/