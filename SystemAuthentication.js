/*
Ser autenticavel significa ter o método autenticar
*/

export class SystemAuthentication{
   static login(autenticavel,password){
      return autenticavel.autenticar(password);
   }
}