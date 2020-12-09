import {Customer} from "./Customer.js"
import {Checking} from "./Checking.js"

const customer1 = new Customer();
customer1.name = "Thiago";
customer1.socialSecurity = 12345678;

const customer2 = new Customer();
customer2.name = "Caroline";
customer2.socialSecurity = 111111111;

const accountThiago = new Checking();
accountThiago.accountReference = 1001;
accountThiago.customer = customer1;
accountThiago.deposit(500);

const accountCaroline = new Checking();
accountCaroline.accountReference = 1002;
accountCaroline.customer = customer2;

let value = 200;
accountThiago.transfer(value, accountCaroline);

accountCaroline.withdrawal(100)

console.log(accountCaroline.balance);

