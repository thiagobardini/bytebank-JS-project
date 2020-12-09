class customer {
  name;
  socialSecurity;
}

class checking {
  agency;
  #balance = 0;

  withdrawal(value) {
    if (this.#balance >= value) {
      this.#balance -= value;
      
    }
  }

  deposit(value) {    // se o valor do deposito for maior que zero some o deposito + balance
    if (value > 0) {
      this.#balance += value;   // Mas se o valor for menor que zero descarte
      console.log(this.#balance);  // # o hashtag é uma proposta para criar privacy que ainda não foi implementado no JS, mas que será
                                    // o saldo só está aparecendo pq o console log foi inserido dentro do objeto, caso ao contrario o valor seria oculto
    }
  }
}

const customer1 = new customer();
customer1.name = "Thiago";
customer1.socialSecurity = 00000000;

const customer2 = new customer();
customer2.name = "Caroline";
customer2.socialSecurity = 111111111;

const accountThiago = new checking();
accountThiago.agency = 1001;
accountThiago.balance = 0;

console.log(accountThiago.balance);
accountThiago.deposit(100);
accountThiago.deposit(100);
accountThiago.deposit(100);
accountThiago.deposit(-1); // não está aceitado o valor negativo

const valueWithdrawal = accountThiago.withdrawal(50); 

console.log(valueWithdrawal);

console.log(accountThiago);

// console.log(`\nName:`, customer1.name);
// console.log(customer2);