# Exercício 6
## WACAD010 - Fundamentos de Banco de Dados

Esse é uma API desenvolvida no curso de "Fundamentos de Banco de Dados".
Neste projeto trabelhei com routes, modelagem de banco, migrações, middlewares, integração do nodejs com o banco de dados, CRUD, entre outros.

### 🛠 Endpoints
 
> GET - /clientes  
Retorna a lista de clientes salvos

> GET - /clientes/id <br>
 Retorna o cliente informando o id

> POST - /clientes<br>
Inserir um cliente, informando os dados "name" e "apelido"

> PUT - /clientes/id<br>
 Para editar um cliente

> DELETE - /clientes/id<br>
Remove um cliente informado pelo id

> GET - /categorias  <br>
Retorna a lista de categorias salvas

> GET - /categorias/id<br>
Retorna a categoria informando o id

> POST - /categorias<br>
Inserir um categorias, informando os dados "descricao"

> PUT - /categorias/id<br>
Para editar uma categoria

> DELETE - /categorias/id<br>
Remove a categoria informado pelo id

> GET - /produtos  <br>
Retorna a lista de produtos salvos

> POST - /produtos<br>
Para inserir um produto, informando os dados "descricao", "preco", "quantidade", "id_categoria"

> PUT - /produtos/id<br>
Para editar informações de um produto

> DELETE - /produtos/id<br>
Remove o produto informado pelo id
