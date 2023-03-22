import { Request, Response } from 'express';
// Importando os types Request e o Response do express

import { Phrase } from '../models/Phrase';
// Importando o model Phrase

import { Sequelize } from 'sequelize';

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
}; // Função que cria uma nova frase no banco de dados, altera o HTTP status para 201 (create) e retorna um JSON com o id, o autor e o texto da frase.

export const getPhrases = async (req: Request, res: Response) => {
    let phrases = await Phrase.findAll();
    res.json(
        {phrases});
}; // Função que retorna um JSON com todas as frases do banco de dados.

export const getOnePhrase = async (req: Request, res: Response) => {

    let id = req.params.id;

    let phrase = await Phrase.findByPk(id);

    if (phrase) {
        res.json({phrase});
    } else {
        res.json({error: 'Frase não encontrada'});
    }
};

export const updatePhrase = async (req: Request, res: Response) => {

    let id = req.params.id;
    let { author, txt } = req.body;

    let phrase = await Phrase.findByPk(id);

    if (phrase) {
        phrase.author = author;
        phrase.txt = txt;    
        await phrase.save();

        res.json({ phrase });           
    } else {
        res.json({error: 'Frase não encontrada'});
    }

    res.json({});
};

export const deletePhrase = async (req: Request, res: Response) => {
    let { id } = req.params;

    await Phrase.destroy({where:{id}});

    res.json({});    
}

export const randomPhrase = async (req: Request, res: Response) => {
    
    let random = await Phrase.findOne({
        order: [
            Sequelize.fn('RAND')
        ]
    })

    res.json({ random });

}