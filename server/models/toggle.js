const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toggleSchema = new Schema({
    choice: Boolean
});

const ModelClass = mongoose.model('toggle', toggleSchema);

module.exports = ModelClass;