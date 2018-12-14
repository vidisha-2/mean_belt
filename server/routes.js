const controller = require('./controller');
const bp = require('body-parser');

module.exports = function(app){
    app.use(bp.json());
    app.get('/api/pets', controller.main);
    app.post('/api/pets/new', controller.create);
    app.get('/api/pets/:id', controller.displayOne);
    app.put('/api/pets/:id/edit', controller.update);
    app.delete('/api/pets/:id', controller.deleteOne);
    app.get('/api/pets/:id/:num', controller.addLike);
    app.all('*', controller.catch);
}