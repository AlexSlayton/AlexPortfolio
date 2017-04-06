// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + "/../index.html"));
  });

  // // login route loads login.html
  // app.get("/login", function(req, res) {
  //   res.sendFile(path.join(__dirname + "/../public/login.html"));
  // });

  // // lend route loads lend.html
  // app.get("/lend", function(req, res) {
  //   res.sendFile(path.join(__dirname + "/../public/lend.html"));
  // });

  // // owe route loads owe.html
  // app.get("/owe", function(req, res) {
  //   res.sendFile(path.join(__dirname + "/../public/owe.html"));
  // });

  // // index route loads index.html
  //   app.get("/index", function(req, res) {
  //   res.sendFile(path.join(__dirname + "/../public/index.html"));
  // });

  // // show the signup form
  // app.get("/signup", function(req, res) {
  // // render the page and pass in any flash data if it exists
  //   res.sendFile(path.join(__dirname + "/../public/signup.html"));
  // });

};

// route middleware to make sure
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
