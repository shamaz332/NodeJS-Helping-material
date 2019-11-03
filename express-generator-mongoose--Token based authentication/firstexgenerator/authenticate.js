var passport = require('passport')
var localStrategy = require('passport-local').Strategy

var User = require('./models/user')

//user.authenticate provide authentication for local strategy
exports.local = passport.use(new localStrategy(User.authenticate()))

//line 10,11 take care our support for session in passport
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
