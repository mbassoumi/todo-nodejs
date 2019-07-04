var todoRouters = require('./todo');

module.exports = function (app) {
    app.use('/todo', todoRouters);

};