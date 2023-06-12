# Este é um teste para desenvolvedores

# possui 5 testes

## Introdução

Este projeto possui um banco de dados fake em fakeData.js com apenas um registro.
A ideia é melhorar e o CRUD escrito nos 4 arquivos de teste abaixo.

Será a validada a forma de escrita de código.
Escreva códigos que humanos consigam entender.

Fique a vontade para fazer modificaçoes nos serviços, comentários em código, estrutura, mas seja objetivo.

## teste1.js

GET em /user 

Possuimos neste arquivo um serviço que faz uma busca no banco fake e retorna um registro.
Este código funciona, mas é possivel melhorar.
Veja o que pode deixar ele melhor escrito e mais performatico.

## teste2.js

POST em /users, descubra a intenção dele e o corrija.

## teste3.js

Este procura um usuário e o deleta da base.
Retorne sucesso para o client caso realmente tenha sido excluido e deixe o código mais performatico.

## teste4.js

Atualiza os dados de um usuário especifico.

## teste5.js

Retorne quantas vezes determinado usuário foi lido no teste1.

## teste 6

Definina uma forma de criar permissão para o usuario, defina se o usuário pode deletar ou atualizar usuários. Crie um middleware para validar essas permissões e adicione no teste4 e teste3.

## como rodar o projeto

1 - instalar dependencias com o comando `npm install` </br>
2 - rodar o comando `npm run dev`, para iniciar o servidor na porta 3000 padrão ou como configurada no ficheiro .env

## testar os endpoints abaixo no seu cliente de preferência (insomnia/postman)

`get user/` </br>
`get users/` </br>
`post users/` </br>
`delete users/1` </br>
`put users/1` </br>
`get users/access` </br>
`put users/permission/1` </br>
  body => {
    "permissions": ["can_update", "can_delete"]
  }
