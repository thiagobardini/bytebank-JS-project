import {Customer} from "./Customer.js";
import {Checking} from "./Checking.js";
import {Savings} from "./Savings.js";
import {Account} from "./Account.js";

const customer1 = new Customer("Thiago", 12345678); 


const accountThiago = new Checking(customer1, 1001);
accountThiago.deposit(500);
accountThiago.withdrawal(100)

const savings = new Savings(50,customer1,1001);
savings.withdrawal(10)


console.log(Account)