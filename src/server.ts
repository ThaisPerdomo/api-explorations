// Importações básicas do node
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

// ÁREA PARA IMPORTAR AS ROTAS. Exemplo: 
// import mainRoutes from './routes/index';

// Configuração do dotenv
dotenv.config();

// Expressão do servidor
const server = express();

//  Criando uma rota para pasta public, utilizando o path.join para juntar o diretório do arquivo com a pasta public
server.use(express.static(path.join(__dirname, '../public')));

// OPCIONAL: Deixando nosso servidor preparado para receber dados do formulário de forma POST
server.use(express.urlencoded({extended: true}));

// ÁREA PARA CHAMAR AS ROTAS. Exemplo:
// server.use(mainRoutes);

// Criando a página não encontrada
server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado!'})
});

// listen da porta do servidor configurada pelo dotenv
server.listen(process.env.PORT);