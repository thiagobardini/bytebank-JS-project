export class Savings {
  constructor(OpeningBalance, customer, agency) {
    this._balance = OpeningBalance;
    this._customer = customer;
    this._agency = agency; 
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
