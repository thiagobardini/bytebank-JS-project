export class Employees {
   constructor(name, salary, socialSecurity) {
      this._name = name;
      this._salary = salary;
      this._socialSecurity = socialSecurity;

      this._rewards = 1;
      this._password;
   }

   autenticar(password) {
      return password == this._password;
   }

   registerPassword(password) {
      this._password = password;
   }
} 
