export class Customer {
  get socialSecurity() {
    return this._socialSecurity;
  }

  constructor(name, socialSecurity, password) {
    this.name = name;
    this._socialSecurity = socialSecurity;
    this._password = password;
  }

  autenticar() {
    return true;
  }
}
// test 
