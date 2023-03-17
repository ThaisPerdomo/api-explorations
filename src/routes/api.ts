import { Router } from 'express';
// Importado o Router do express para criar as rotas

const router = Router();
// Criando a rota raiz

router.get('/ping', (req, res) => { 

    res.json({pong: true});

});

router.get('/random', (req, res) => {
    let numeroAleatorio: number = Math.floor(Math.random() * 10);

    res.json({numero: numeroAleatorio});

});

router.get('/nome/:nome', (req, res) => {
    let nome: string = req.params.nome;
    res.json({nome: `você enviou o nome ${nome}`});
});


export default router;