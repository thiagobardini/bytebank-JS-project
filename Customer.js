export class Customer {
  name;
  _socialSecurity;


  get socialSecurity() {
    return this._socialSecurity;
  }

  constructor(name, socialSecurity) {
    this.name = name;
    this._socialSecurity = socialSecurity;
  }

}