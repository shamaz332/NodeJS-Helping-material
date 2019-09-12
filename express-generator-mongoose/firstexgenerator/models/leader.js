
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var leadeerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: String,
    designation: String,
    abbr: String,
    description: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});
var Leaders = mongoose.model('Leader', leadeerSchema);

module.exports = Leaders;