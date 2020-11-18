export class Customer {
  name;
  _socialSecurity;


  get socialSecurity(){
    return this._socialSecurity;
  }

  // constructor -> ë a construcao de um paramento que vai receber somente essa estrutra para inicializar o atributo, não sendo possivel add valores fora desse estrutura.
  constructor(name, socialSecurity){  
    this.name = name;
    this._socialSecurity = socialSecurity;
  }

}