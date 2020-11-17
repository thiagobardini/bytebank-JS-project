class customer {
  name;
  socialSecurity;
}

class checking {
  accountReference;
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
}

const customer1 = new customer();
customer1.name = "Thiago";
customer1.socialSecurity = 00000000;

const customer2 = new customer();
customer2.name = "Caroline";
customer2.socialSecurity = 111111111;

const accountThiago = new checking();
accountThiago.accountReference = 1001;

accountThiago.deposit(-100); // na função early return retirou esse valor
accountThiago.deposit(100);
accountThiago.deposit(100);


const valueWithdrawal = accountThiago.withdrawal(50); 

console.log(valueWithdrawal);

console.log(accountThiago);

// console.log(`\nName:`, customer1.name);
// console.log(customer2);