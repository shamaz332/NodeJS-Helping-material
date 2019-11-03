var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose')
var User = new Schema({
    // username: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // password: {
    //     type: String,
    //     required: true
    // },
    //hmny username r pass ko remove kr dia .q k passport local mongoose ka plugin esy auto add kra dy ga
    admin: {
        type: Boolean,
        default: false
    }
});
User.plugin(passportLocalMongoose)
module.exports = mongoose.model('User', User);