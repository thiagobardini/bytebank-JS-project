export class Account {
  constructor(openingBalance, customer, agency) {
    if(this.constructor == Account){     
      throw new Error("You should not instantiate an object of type Account Directly, as this is an abstract class")
    } 

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
    throw new Error("The withdrawal from account method is abstract")
  }


  _withdrawal(value, tax) {
    const amountWithdrawn = tax * value;
    if (this._balance >= amountWithdrawn) {
      this._balance -= amountWithdrawn;
      return amountWithdrawn;
    }
    return 0;
  }

  deposit(value) {
    this._balance += value;
  }

  transfer(value, agency) {
    const amountWithdrawn = this.withdrawal(value);
    agency.deposit(amountWithdrawn);
  }


}