import { Request, Response } from 'express';
// Importando os types Request e o Response do express

import { Phrase } from '../models/Phrase';
// Importando o model Phrase

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}; // Função que retorna um JSON com o pong: true. 

export const random = (req: Request, res: Response) => {
    res.json({random: Math.random()});
}; // Função que retorna um JSON com um número aleatório

export const nome = (req: Request, res: Response) => {
    let nome: string = req.params.nome;
    res.json({nome: `você enviou o nome ${nome}`});
} // Função que retorna um JSON com o nome que foi enviado na URL.


// Funções que vão acessar o banco de dados:

export const createPhrase = async (req: Request, res: Response) => {
    
    let author: string = req.body.author;
    let txt: string = req.body.txt;
    
    let newPhrase = await Phrase.create({ author, txt });
    res.status(201);
    res.json({id: newPhrase.id, author, txt});
};