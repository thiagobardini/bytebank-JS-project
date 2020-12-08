import { Employees } from "./Employees.js";

export class Director extends Employees {
   constructor(name, salary, socialSecurity) {
      super(name, salary, socialSecurity)
      this._rewards = 2;
   }
}