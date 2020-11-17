class customer {
  name;
  socialSecurity;
}

class checking {
  accountReference;
  balance;

  withdrawal(value){
    if(this.balance >= value){
        this.balance -= value;
        return value;
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
accountThiago.accountReference = 1001;
accountThiago.balance = 0;

console.log(accountThiago.balance)
accountThiago.balance = 100
console.log(accountThiago.balance)
accountThiago.withdrawal(200)

console.log(accountThiago.balance)
console.log(`\nName:`,customer1.name);
console.log(customer2);