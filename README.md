# Exercício 6
## WACAD010 - Fundamentos de Banco de Dados

Esse é uma API desenvolvida no curso de "Fundamentos de Banco de Dados".
Neste projeto trabelhei com routes, modelagem de banco, migrações, middlewares, integração do nodejs com o banco de dados, CRUD, entre outros.

### 🛠 Endpoints
 
> GET - /clientes  
Retorna a lista de clientes salvos

> GET - /clientes/id
Retorna o cliente informando o id

> POST - /clientes
Inserir um cliente, informando os dados "name" e "apelido"

> PUT - /clientes/id
Para editar um cliente

> DELETE - /clientes/id
Remove um cliente informado pelo id

> GET - /categorias  
Retorna a lista de categorias salvas

> GET - /categorias/id
Retorna a categoria informando o id

> POST - /categorias
Inserir um categorias, informando os dados "descricao"

> PUT - /categorias/id
Para editar uma categoria

> DELETE - /categorias/id
Remove a categoria informado pelo id

> GET - /produtos  
Retorna a lista de produtos salvos

> POST - /produtos
Para inserir um produto, informando os dados "descricao", "preco", "quantidade", "id_categoria"

> PUT - /produtos/id
Para editar informações de um produto

> DELETE - /produtos/id
Remove o produto informado pelo id