//Nome: Felipe da Silva Barros Cabral
//Turma: ADS 1° semestre
//Matrícula: 2114290031

/*Este projeto é uma Api de usuários, primeiro quero que envie uma requisição POST de username e password para criar o 
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
*/ 


const express = require('express');// puxando o express
const server = express(); // definindo o express
const port = 3000; // definindo a porta

server.use(express.json());

let users = [{
    username: 'teste',
    password: 'teste'
}];

server.post('/users', (req, res) => { //Cadastrar usuários
    const user = { username, password } = req.body;

    users.push(user);

    res.status(200).json({ username });
});

server.post('/login', (req, res) => { // Login usuários
    const{ username, password } = req.body;

    for(let i = 0; i < users.length; i++){

        if(users[i].username === username && users[i].password === password){
            return res.status(200).send("Usuário logado com sucesso");
        }
    }
    return res.status(401).send("Usuário ou senha incorretos");
});

server.put('/users', (req, res) => { // Atualizar usurários
    const username = req.query.username;
    const user = { 
        username: req.body.username, 
        password: req.body.password 
    };
    
    const index = users.findIndex(user => user.username === username);

    if(index === -1){
        return res.status(404).send("Usuário não encontrado");
    }
    users[index] = user;
    return res.status(200).send("Usuário atualizado com sucesso")
}) 

server.delete('/users', (req, res) => { // Deletar usuários 
    const username = req.query.username;

    const index = users.findIndex(x => x.username === username);

    if(index === -1) {
        return res.status(404).send("Usuário não encontrado.");
    }

    users.splice(index, 1);
    console.log(users);

    res.status(200).send("Usuário deletado com sucesso.");
});

server.get('/users', (req, res) => { // Listar usuários
    return res.status(200).json(users);
});

server.listen(port, () => console.log('Running on port 3000')); //Colocar o servidor no ar