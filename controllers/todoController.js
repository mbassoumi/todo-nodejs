var Todo = require('../models/Todo');


module.exports.index = function(request, response) {
    Todo.find({}, function (err, data) {
        if (err) throw err;
        response.render('todo', {todos: data});
    });
};

module.exports.store = function(request, response) {
    var newItem = request.body;
    newItem.id = Math.random();
    Todo(newItem).save(function (err, data) {
        if (err) throw err;
        response.json(data);
    });
};

module.exports.destroy = function(request, response) {
    var id = request.params.id;
    Todo.deleteOne({id: id}, function (err, data) {
        if (err) throw err;
        response.json(data);
    });
};