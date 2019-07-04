var Todo = require('../models/Todo');


module.exports = function (app) {

    app.get('/todo', function (request, response) {
        // get data from mongodb
        Todo.find({}, function (err, data) {
            if (err) throw err;
            response.render('todo', {todos: data});
        });

    });

    app.post('/todo', function (request, response) {
        var newItem = request.body;
        newItem.id = Math.random();
        Todo(newItem).save(function (err, data) {
            if (err) throw err;
            response.json(data);

        });
    });

    app.delete('/todo/:id', function (request, response) {
        var id = request.params.id;
        Todo.deleteOne({id: id}, function (err, data) {
            if (err) throw err;
            response.json(data);
        });
    });
};