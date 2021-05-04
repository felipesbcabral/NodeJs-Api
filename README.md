# Projeto Api de usuários

Nome: Felipe da Silva Barros Cabral

Turma: ADS 1° semestre

Matrícula: 2114290031

Este projeto é uma Api de usuários, primeiro quero que envie uma requisição POST de username e password para criar o 
usuário e que retorne o status OK(200). 

Também você terá que criar o Login do usuário enviando uma requisição POST, e verificar se o username e password 
do usuário cadastrado bate com o usuário criado usando um for e if, terá que retornar o status OK(200) do login, 
e se o usuário estiver incorreto retorne o status não autorizado(401).

Também você terá que criar o atualizar usuário enviando uma requisição PUT, poderá ser feito verificando o 
index do usuário se bate com o username, e se não tiver nenhum usuário retorne o status não encontrado(404), 
e se a atualização for bem sucedida retornar status OK(200).

Também terá que ter o Deletar usuário enviando uma requisição DELETE, você deverá pegar o index do e verificar 
se ele bate com o username, se não tiver nenhum usuário cadastrado você deverá retornar o status não encontrado(404), 
para deletar você deverá usár um metodo para apagar o cadastro, e pegar o index e depois retornar status OK(200).

Por ultimo você deverá fazer o listar usuários enviando uma requisição GET, para fazer isso voce terá que retornar 
status OK(200) usando json usuários.

## Criar usuário

URL: localhost:3000/users

Method: POST

Body: 
```
{
    "username": "",
    "password": ""
}
  ```
## Login usuário

URL: localhost:3000/users

Method: POST

Body:
```
{
    "username": "",
    "password": ""
}
  ```
## Atualizar usuário

Query string:
username

URL: localhost:3000/users?username=teste <= colocar qualquer nome.

Method: PUT

Body:
```
{
    "username": "",
    "password": ""
}
  ```
## Listar usuários

URL: localhost:3000/users

Method: GET


## Deletar usuários

URL: localhost:3000/users?username=teste

Method: DELETE

Para executar o projeto é preciso usar o comando:
```node ./src/server.js```
