import Currency from './3-currency'; // eslint-disable-line no-unused-vars
/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    this.amount = amount;
  }

  set currency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
