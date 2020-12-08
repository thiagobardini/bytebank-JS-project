import{ Employees } from "./Employees.js";

export class Manager extends Employees{
   constructor(name,salary,socialSecurity){
      super(name,salary,socialSecurity)
      this._rewards = 1.1;
   }
} 