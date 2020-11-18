import {Customer} from "./Customer.js"
import {Checking} from "./Checking.js"

const customer1 = new Customer("Thiago", 12345678); 
const customer2 = new Customer("Caroline", 111111111);


const accountThiago = new Checking(1001, customer1);
accountThiago.deposit(500);
accountThiago.withdrawal(100)

const accountCaroline = new Checking(1002, customer2);

let value = 200;
accountThiago.transfer(value, accountCaroline);

console.log("Byte Bank - Number of Accounts: ",Checking.numberOfAccounts);

console.log(`\n`,accountThiago);
console.log(`\n`,accountCaroline);


