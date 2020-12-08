/*
Ser autenticavel significa ter o método autenticar
*/

export class SystemAuthentication {
   static login(autenticavel, password) {
      if (SystemAuthentication.isAutenticavel(autenticavel)) {
         return autenticavel.autenticar(password);
      }
      return false;
   }
   // é static pq eu nao preciso de uma instancia para chamar ele, posso chamar diretamente, ele pertence ao SystemAuthentication
   static isAutenticavel(autenticavel){
      return "autenticar" in autenticavel  &&  // se autenticar estiver dentro do autenticavel ele retorna o valo
         autenticavel.autenticar instanceof Function; // é uma funcao dentro de uma funcao
   }
}   