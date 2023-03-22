import { Router } from 'express';
// Importado o Router do express para criar as rotas

import * as ApiController from '../controllers/apiController';
// Importando o controller da API

const router = Router();
// Criando a rota raiz

// ROTAS DA API: TESTES

router.get('/ping', ApiController.ping);
// Criando a rota /ping que chama a função ping do controller
router.get('/random', ApiController.random);
// Criando a rota /random que chama a função random do controller
router.get('/nome/:nome', ApiController.nome);
// Criando a rota /nome que chama a função nome do controller


// ROTAS DA API QUE VÃO ACESSAR O BANCO DE DADOS

router.post('/frases', ApiController.createPhrase);

router.get('/frases', ApiController.getPhrases);

router.get('/frases/aleatoria', ApiController.randomPhrase);

router.get('/frases/:id', ApiController.getOnePhrase);

router.put('/frases/:id', ApiController.updatePhrase);

router.delete('/frases/:id', ApiController.deletePhrase);

export default router;