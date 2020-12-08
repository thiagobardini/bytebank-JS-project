import { Account } from "./Account.js";
export class Checking extends Account {    
  static numberOfAccounts = 0;
  constructor(customer,agency) {
    super(0,customer,agency);    
    Checking.numberOfAccounts += 1;
  }

  withdrawal(value) {
    let tax = 1.1;
    return this._withdrawal(value,tax)
  }


} 