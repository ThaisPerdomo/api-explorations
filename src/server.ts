// Importações básicas do node para APIs
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

// ÁREA PARA IMPORTAR AS ROTAS DA API. Exemplo: 
import rotasAPI from './routes/api';

// Configuração do dotenv
dotenv.config();

// Expressão do servidor
const server = express();

// Abaixo, é para configurar o CORS, para que o servidor aceite requisições de outros domínios
// Caso não tenha parâmetro, aceitará requisições de qualquer domínio

server.use(cors());

//  Criando uma rota para pasta public, utilizando o path.join para juntar o diretório do arquivo com a pasta public
server.use(express.static(path.join(__dirname, '../public')));

// OPCIONAL: Deixando nosso servidor preparado para receber dados do formulário de forma POST
server.use(express.urlencoded({extended: true}));


// server.use(express.json());

//ÁREA PARA CHAMAR AS ROTAS DA API. Não precisa ter uma rota "extra" igual a abaixo que tem um '/api'; ou seja, poderia ser um .use(rotaAPI)
server.use('/api', rotasAPI);



// Fazendo uma rota para o endpoint não encontrado, para que o servidor retorne um erro 404
// Importante que aqui não tem o res.send e sim um res.json para retornar um JSON
server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado!'})
});

// listen da porta do servidor configurada pelo dotenv
server.listen(process.env.PORT);