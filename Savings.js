import { Account } from "./Account.js";

export class Savings extends Account {
  constructor(openingBalance, customer, agency) {
    super(openingBalance,customer,agency);             
  }
}
