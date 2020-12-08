import {Customer} from "./Customer.js";
import {Manager} from "./employees/Manager.js";
import {Director} from "./employees/Director.js";
import {SystemAuthentication} from "./SystemAuthentication.js";

const director =  new Director("Rodrigo", 10000, "111-22-3333");
director.registerPassword("123456")
const manager = new Manager("Ricardo", 5000, "222-33-4444");
manager.registerPassword("123")

const customer = new Customer("Lais", "333-44-5555", "456");
const managerlogIn = SystemAuthentication.login(manager, "123");
const directorlogIn = SystemAuthentication.login(director, "123456");

const customerlogIn = SystemAuthentication.login(customer, "456");

console.log(managerlogIn, directorlogIn, customerlogIn);





// import {Checking} from "./Account/Checking.js";
// import {Savings} from "./Account/Savings.js";
// import {Account} from "./Account/Account.js";
// import {SalaryAccount} from "./Account/SalaryAccount.js";


// const customer1 = new Customer("Thiago", 12345678); 


// const accountThiago = new Checking(customer1, 1001);
// const savings = new Savings(50,customer1,1001);
// const salaryAccount =  new SalaryAccount(customer1)

// salaryAccount.deposit(100);
// salaryAccount.withdrawal(10);

// console.log(salaryAccount);