
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var promoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image:String,
    label:String,
    price :Number,
    description: {
        type: String,
        required: true
    },
   
}, {
    timestamps: true
});
var Promotions = mongoose.model('Promotion', promoSchema);

module.exports = Promotions;