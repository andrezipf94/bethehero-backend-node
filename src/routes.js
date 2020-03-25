const express = require('express');
const crypto = require('crypto');

const routes = express.Router();

const ONGController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.get('/', (req, resp) => {
    return resp.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Andre Luis Zipf"
    });
});

routes.post('/ongs', ONGController.create);
routes.get('/ongs', ONGController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;