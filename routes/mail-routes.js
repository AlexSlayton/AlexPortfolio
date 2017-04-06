// *********************************************************************************
// mail-routes.js - this file offers a set of routes for sending users mail
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var mail = require("../mail/mailsend.js");
var Entities = require('html-entities').AllHtmlEntities;
 
entities = new Entities();

// Routes
// =============================================================
module.exports = function(app) {
	app.get('/getmail', function(req, res){
		res.send("hello world");
	});
	app.post('/sendmail', function(req, res){
		// Lets store this info in the DB
		// After its been stored, in the callback of the database request send the email below
		// Lets send an email
		var subject = req.body.name + " Has Contacted You.";
		var message = entities.encode(req.body.name) + " \n" + entities.encode(req.body.email) + " \n" + entities.encode(req.body.phone) + "\n" + entities.encode(req.body.message);
		var text = "Strip out the HTML from the req.body.message and store it in this url";
		var options = mail.mailOptions(req.body.email, subject, message, message);

		mail.sendMail(options, function(){
			res.redirect("/");
		});

	});
};