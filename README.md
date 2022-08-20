# Express: CRUD de usuário + permissão de administrador

#### CRUD de usuário com algumas regras de acesso apenas para usuários administradores.

## Endpoints do serviço:
|Método	|Endpoint	|Responsabilidade|Acesso|
| --- | --- |--- |--- |
|POST	|/users	|Criação de usuário|Qualquer pessoa|
|POST	|/login |Gera um token JWT recebendo email e password no corpo da requisição como JSON|Qualquer pessoa cadastrada|
|GET	|/users	|Lista todos os usuários|Apenas usuários que sejam administradores|
|GET	|/users/profile	|Retorna os dados do usuário logado (usuário a qual pertence o token que será necessário neste endpoint)|Qualquer pessoa cadastrada|
|PATCH	|/users/:id	|Atualiza os dados de um usuário|Apenas administradores podem atualizar qualquer usuário, usuários não-administradores podem apenas atualizar seu próprio usuário|
|DELETE	|/users/:id	|Deleta um usuário do banco|Apenas administradores podem excluir qualquer usuário, usuários não-administradores podem apenas excluir seu próprio usuário|

##
Exemplo de dados passados na criação de um usuário:
```
{
    "name": "daniel",
    "email": "daniel@kenzie.com",
    "password": "123456",
    "isAdm": true
}
```
Resposta: STATUS 201 CREATED
```
{
    "id": "4b72c6f3-6d0a-6a1-86c6-687d52de4fc7",
    "createdOn": "2022-08-20T01:23:52.910Z",
    "updatedOn": "2022-08-20T01:23:52.910Z",
    "name": "daniel"
    "email": "daniel@kenzie.com",
    "isAdm": true
}
```







                                                                                                      
                                                                                                                                               
