import {Customer} from "./Customer.js";
import {Checking} from "./Account/Checking.js";
import {Savings} from "./Account/Savings.js";
import {Account} from "./Account/Account.js";
import {SalaryAccount} from "./Account/SalaryAccount.js";


const customer1 = new Customer("Thiago", 12345678); 


const accountThiago = new Checking(customer1, 1001);
const savings = new Savings(50,customer1,1001);
const salaryAccount =  new SalaryAccount(customer1)

salaryAccount.deposit(100);
salaryAccount.withdrawal(10);

console.log(salaryAccount);