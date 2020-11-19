export class Checking {
  agency;
  customer;
 
  _balance = 0; // _ é uma convenção da comunidade para indicar que esse atributo é privacidade, e só deve ser acessado se for dentro dela.

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