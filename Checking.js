import { Account } from "./Account.js";
export class Checking extends Account {   // extends -> extende os dados de outra class 
  static numberOfAccounts = 0;
  constructor(customer,agency) {
    super(0,customer,agency);    // super ->  super é usada para acessar o objeto pai de um objeto, em outros casos, é usada para acessar a classe pai de uma classe.
    Checking.numberOfAccounts += 1;
  }

  //sobreescrevendo o comportamento da classe - o this poderia ser substituido por 'super'
  withdrawal(value) {
    let tax = 1.1;
    return this._withdrawal(value,tax)
  }

  // Explicando como se comporta o SUPER em relacao a conta pai com filho(account)
  // test(){
  //   super.test();
  //   console.log("Testing the method super")
  // }

} 