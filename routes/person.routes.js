const PersonController = require('../controllers/person.controller'); //Se crea la ruta que va a leer el controlador person y a la vez exporta la configuración
module.exports = function(app){
    app.get('/api', PersonController.index);
}

