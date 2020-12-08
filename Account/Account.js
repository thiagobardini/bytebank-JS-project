export class Account {
  constructor(openingBalance, customer, agency) {
    if(this.constructor == Account){     // se coloca o if para nao repetir tres vezes para cada this acima
      throw new Error("You should not instantiate an object of type Account Directly, as this is an abstract class")
    } // lancar um erro de execução, pq eu nao quero q ninguem acesse a classe account.. essa é uma classe abstrata que nao pode ser acessada diretamente, mas pode ser acessada via herança.

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

     //Método abstrato
  withdrawal(value) {  // o metodo withdrawal -> vai dar erro caso chame direto 
    throw new Error("The withdrawal from account method is abstract")
  }

  // Esses dois metodos tem correlacao com a class checking e savings, sendo que checking é atribuido uma taxa dentro de uma hierarquia super
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