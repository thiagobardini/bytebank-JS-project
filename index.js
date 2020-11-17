class Cliente{
  nome;
  cpf;
}

class ContaCorrente{
  agencia;
   // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
  _saldo = 0; // _ é uma convenção da comunidade para indicar que esse atributo é privacidade, e só deve ser acessado se for dentro dela.

  sacar(valor){                         // É uma operacao dentro da class(property)
      if(this._saldo >= valor){
          this._saldo -= valor;
          return valor;
      }
  }

  depositar(valor){
      if(valor <= 0)
      {
          return;
      } 
      this._saldo += valor;           
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(-100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);