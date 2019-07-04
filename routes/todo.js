var express = require('express');
var router = express.Router();

var todoController = require('../controllers/todoController');


router.get('', todoController.index);
router.post('', todoController.store);
router.delete('/:id', todoController.destroy);


module.exports = router;