import { Account } from "./Account.js";

export class Savings extends Account {
  constructor(openingBalance, customer, agency) {
    super(openingBalance,customer,agency);    // super ->  super é usada para acessar o objeto pai de um objeto, em outros casos, é usada para acessar a classe pai de uma classe.          
  }

  withdrawal(value){
    const tax = 1.02;
    return this._withdrawal(value, tax)
  }
}
