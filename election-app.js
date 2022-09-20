const port = process.env.PORT || 80;

// TEST

// =============
//    Requires
// =============
var express 			  = require("express"),
	bodyParser 		  	  = require("body-parser"),
	methodOverride 	 	  = require("method-override"),
	expressSanitizer 	  = require("express-sanitizer")

var app = express();

// Uses and View Engine
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(expressSanitizer());

// Uses All the Routes that are in the Separate Route Files
app.get("/president", function(req, res) {
	res.render("president");
});

app.get("/vp", function(req, res) {
	res.render("vp");
});

app.get("/secretary", function(req, res) {
	res.render("secretary");
});

app.get("/treasurer", function(req, res) {
	res.render("treasurer");
});

app.get("/2022", function(req, res) {
	res.render("2022");
});

app.get("/2023", function(req, res) {
	res.render("2023");
});

app.get("*", function(req, res) {
	res.redirect("/president");
});

// ==========
//    Host
// ==========
app.listen(port, function() {
	console.log("Hosted on port 8000");
});