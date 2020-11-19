export class Account {
  constructor(openingBalance, customer, agency) {
    this._balance = openingBalance;
    this._customer = customer;
    this._agency = agency;
  }

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

  withdrawal(value) {
    let tax = 1;
    const amountWithdrawn = tax * value;
    if (this._balance >= amountWithdrawn) {
      this._balance -= amountWithdrawn;
      return amountWithdrawn;
    }
  }

  deposit(value) {
    this._balance += value;
  }

  transfer(value, agency) {
    const amountWithdrawn = this.withdrawal(value);
    agency.deposit(amountWithdrawn);
  }


}