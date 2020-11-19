import { Account } from "./Account.js";
export class Checking extends Account {   // extends -> extende os dados de outra class 
  static numberOfAccounts = 0;
  constructor(customer,agency) {
    super(0,customer,agency);
    Checking.numberOfAccounts += 1;
  }

  withdrawal(value) {
    if (this._balance >= value) {
      this._balance -= value;
      return value;
    }
  }

}