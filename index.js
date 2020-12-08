import {Customer} from "./Customer.js";
import {Manager} from "./employees/Manager.js";
import {Director} from "./employees/Director.js";
import {SystemAuthentication} from "./SystemAuthentication.js";
import {Checking} from "./Account/Checking.js";
import {Savings} from "./Account/Savings.js";
import {Account} from "./Account/Account.js";
import {SalaryAccount} from "./Account/SalaryAccount.js";

const director =  new Director("Rodrigo", 10000, "111-22-3333");
director.registerPassword("123456")
const manager = new Manager("Ricardo", 5000, "222-33-4444");
manager.registerPassword("123")


const managerlogIn = SystemAuthentication.login(manager, "123");
const directorlogIn = SystemAuthentication.login(director, "123456");

const customer0 = new Customer("Lais", "333-44-5555", "456");
const customer0logIn = SystemAuthentication.login(customer0, "456");


const customer1 = new Customer("Thiago", "123-45-2678", "656"); 
const customer1logIn = SystemAuthentication.login(customer1, "656");

// System Authentication
console.log(managerlogIn, directorlogIn, customer0logIn, customer0logIn);

// Account process
const account1 = new Checking(customer1, 1001);
const savings = new Savings(50,customer1,1001);
const salaryAccount =  new SalaryAccount(customer1)

salaryAccount.deposit(100);
salaryAccount.withdrawal(10);

console.log(salaryAccount);
console.log(savings)
console.log(customer1);
console.log(account1);
