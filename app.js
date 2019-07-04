var express = require('express');
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

var todoController = require('./controllers/todoController');


var app = express();

/**
 * set up view engine [template]
 */
app.set('view engine', 'ejs');
var urlEncodedParser = bodyParser.urlencoded({extended: false});
app.use(urlEncodedParser);

/**
 * static files [styles, images, ...]
 */
app.use(express.static(__dirname + '/public'));


/**
 * fire controllers
 */
todoController(app);


/**
 *  listen to port 3000
 */
app.listen(process.env.PORT);
console.log(`you are listening on port ${process.env.PORT}`);