// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app      = express();
var PORT     = process.env.PORT || 8080;
var path     = require("path");
// var passport = require('passport');
// var flash    = require('connect-flash');
// var db 	     = require("./models");

// configuration ===============================================================
// connect to our database

// require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// static pages
app.use(express.static(path.join(__dirname, './public')));

// // required for passport
// app.use(session({
// 	secret: 'vidyapathaisalwaysrunning',
// 	resave: true,
// 	saveUninitialized: true
//  } )); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session


// routes ======================================================================
// require('./routes/html-routes.js')(app, passport);
// require('./routes/items-api-routes.js')(app, passport);
// require('./routes/lenderBorrower-api-routes.js')(app, passport);
// require('./routes/users-api-routes.js')(app, passport);
require('./routes/mail-routes.js')(app);
require('./routes/html-routes.js')(app);
// sync
// db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
// });
