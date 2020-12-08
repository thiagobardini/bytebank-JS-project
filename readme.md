# alura-courses

![alura](https://lh3.googleusercontent.com/TM-g_2L7u2p99kwg4IQeB-3352WfCq0vKXP4h5cOvISUlNll6-1WHu8t2B0oZdZKjkmp)


## Phase 2.2 - Heritage
  - Specializing code
  - Inheriting properties and attributes
  - Overload of methods
  - Sharing code securely
  - Keeping our code in the client's language
  - Avoiding very complicated code through inheritance
  - Super keyword
  - Private and protected method and properties


## References

### JavaScript 
- extends -> extende os dados de outra class 
- get -> associa uma propriedade de um objeto a uma função que será chamada quando tal propriedade é acessada.

- instanceof -> The Left Hand Side (LHS) operand is the actual object being tested to the Right Hand Side (RHS) operand which is the actual constructor of a class
  - No entanto, a gente não pode alterar (por padrão) o prototype do objeto.
- static -> is created with the "static" keyword, and you can only call the method on the class itself.  
- super ->  hierarquia de aceeso - super é usada para acessar o objeto pai de um objeto, em outros casos, é usada para acessar a classe pai de uma classe.

### Shortcut
- (VSCode) Mac: Command + Option + o -> Alterar codigo em linhas ao mesmo tempo 
- (JS) `\n` line empty 
- Package.json
  - Instalando package.json -> npm init
  - Para rodar os modulos incluir no documento: "type": "module"
     > A versão modulo está ainda como versão experimental

- Shortcuts for the videos class - Alura
  - Setas ⬅️(esquerda) e ➡️(direita) avaçam ou retorcedem 10s
  - M mutar o video
  - F para ir para tela cheia
  - K ou espaço pausam o video
  - X cicla entre as opções de velocidade de repodução do video
  - Setas ⬆️(cima) e para ⬇️(baixo), aumentam e diminuem o volume mas para isso tem que estar focado no video
 
### Git -> Commit & Push
- git add .                           -> chamando o arquivo master
- git commit -m "updated"             -> criar commit
- git push                            -> push de todos os arquivos no repositorio.

### Git -> Creating a new branch
- git checkout -b NewBranch           -> Creating a new branch
- git status                          -> Mostra o que foi modificado 
- git add -A                          -> enviar todas as alteracoes dentro do repositorios locais
- git commit -m 'New Commit'          -> commit 
- git push origin NewBranch           -> Push

### Git -> Merge Branches
- git checkout test |ou main|         -> trocar branches 
- git branch                          -> Checar qual a branch está em uso 
- git merge NewBranch                 -> mergir branches 
- git add .                           -> enviar todas as alteracoes dentro do repositorios locais
- git commit -m "testando merge"      -> Commit
- git push origin main                -> Push
