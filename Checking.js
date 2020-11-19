import { Customer } from "./Customer.js";

export class Checking {
  static numberOfAccounts = 0; //Serve como um valor estatico se referindo a class Checking
  agency;
  _customer;
  _balance = 0; // _ é uma convenção da comunidade para indicar que esse atributo é privacidade, e só deve ser acessado se for dentro dela.



  set customer(newValue){           // regra de protecao do dado, é só possivel receber o valor do customer
    if(newValue instanceof Customer){
      this._customer = newValue;
    }
  }  

  get customer(){
    return this._customer;
  }

  get balance(){
    return this._balance;
  }           
  // get -> é uma propriedade de leitura. Nao é possivel atrubuir valor diretamente 

  constructor(agency, customer){
    this.agency = agency;
    this._customer = customer; 
    Checking.numberOfAccounts += 1; // usando static -> o valor se refere ao total de contas no Checking, evitando o erro de atribuir somente uma conta.
  }

  withdrawal(value) {
    if(this._balance >= value) {
      this._balance -= value;
      return value;
    }
  }

  deposit(value) {    
    if(value <= 0) {
      return;         // early return -> se o valor for menor que zero a função para
    }
      this._balance += value;
  }

  transfer(value, agency){
    const amountWithdrawn = this.withdrawal(value);
    agency.deposit(amountWithdrawn);
  }
}