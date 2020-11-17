class Cliente{                  // 1- Exemplo de class ->  Uma maneira de replicar, q se chama properties.. Ao invéns de const para cada um (nome, cpf...)   
  nome;
  cpf;
  agencia;
  saldo;
}

const cliente1 = new Cliente();  // new refere-se a um objeto -> uma instancia da minha class (meu molde)
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";       
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;


cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;


const cliente3Nome = "Alice";       // 2-Exemplo
const cliente3CPF = 88822233309;
const cliente3Agencia = 1001;
const cliente3Saldo = 0;
console.log(cliente1, cliente2);