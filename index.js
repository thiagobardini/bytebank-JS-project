import { Customer } from "./Customer.js";
import { Manager } from "./employees/Manager.js";
import { Director } from "./employees/Director.js";
import { SystemAuthentication } from "./SystemAuthentication.js";
import { Checking } from "./Account/Checking.js";
import { Savings } from "./Account/Savings.js";
import { SalaryAccount } from "./Account/SalaryAccount.js";

// Employee Registration
const director = new Director("Rodrigo", 10000, "111-22-3333");
director.registerPassword("123456");
const manager = new Manager("Ricardo", 5000, "222-33-4444");
manager.registerPassword("123");
// Employee Login Verification
const managerlogIn = SystemAuthentication.login(manager, "123");
const directorlogIn = SystemAuthentication.login(director, "123456");

// Customer Registration
const customer0 = new Customer("Lais", "333-44-5555", "456");
const customer1 = new Customer("Thiago", "123-45-2678", "656");
// Customer Login Verification
const customer0logIn = SystemAuthentication.login(customer0, "456");
const customer1logIn = SystemAuthentication.login(customer1, "656");

// Account Process - Customer 0 
const checkingAccountCustomer0 = new Checking(1000, customer0, 1000);
const salaryAccountCustomer0 = new SalaryAccount(customer0);
salaryAccountCustomer0.deposit(500);
salaryAccountCustomer0.withdrawal(100);

// Account Process - Customer 1 
const savingsCustomer1 = new Savings(50, customer1, 1001);

// System Authentication
console.log("Who is logged in:", "Manager: ", managerlogIn, "| Director: ", directorlogIn, "| Customer 0:", customer0logIn, "| Customer 1:", customer1logIn, `\n\n`);

// Account Process
console.log(checkingAccountCustomer0);
console.log(salaryAccountCustomer0, `\n\n`);
console.log(savingsCustomer1, `\n\n`);

console.log(`\n`, Checking);

