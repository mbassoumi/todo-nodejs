var mongoose = require('mongoose');

// connecting to DB:
mongoose.connect(`mongodb://localhost/${process.env.DATABASE_NAME}`, { useNewUrlParser: true });

// Create a schema
var todoSchema = new mongoose.Schema({
    item: String,
    id: Number
});

module.exports = mongoose.model('Todo', todoSchema);