import { Customer } from "./Customer.js";

export class Checking {
  static numberOfAccounts = 0;
  agency;
  _customer;
  _balance = 0;



  set customer(newValue) {
    if (newValue instanceof Customer) {
      this._customer = newValue;
    }
  }

  get customer() {
    return this._customer;
  }

  get balance() {
    return this._balance;
  }

  constructor(agency, customer) {
    this.agency = agency;
    this._customer = customer;
    Checking.numberOfAccounts += 1;
  }



  withdrawal(value) {
    if (this._balance >= value) {
      this._balance -= value;
      return value;
    }
  }

  deposit(value) {
    if (value <= 0) {
      return;
    }
    this._balance += value;
  }

  transfer(value, agency) {
    const amountWithdrawn = this.withdrawal(value);
    agency.deposit(amountWithdrawn);
  }
}