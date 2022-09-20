// =============
//    Requires
// =============
var	express 			  = require("express"),
	mongoose 			  = require("mongoose"),
	passport 			  = require("passport"),
	bodyParser 		  	  = require("body-parser")
	
var router = express.Router({mergeParams:true});

var User   = require("../models/user"),
	Minute = require("../models/minute")



// ================
// 		Routes
// ================
router.get("/minutes", function(req, res) {
	Minute.find({}).sort("-date").exec(function(err, minutes) {
		if (err) {
			console.log(err);
			res.send("Error Fetching from Database - Please Try Again Later");
		} else {
			minutes = minutes.sort(sortDate);
			res.render("all-minutes", {minutes:minutes});
		}
	});
});

router.get("/minutes/all", function(req, res) {
	Minute.find({}).sort("-date").exec(function(err, minutes) {
		if (err) {
			console.log(err);
			res.send("Error Fetching from Database - Please Try Again Later");
		} else {
			minutes = minutes.sort(sortDate);
			res.render("all-minutes", {minutes:minutes});
		}
	});
});

router.get("/minutes/show/:id", function(req, res) {
	Minute.findById(req.params.id, function(err, foundMinute) {
		if (err) {
			res.send("Error Fetching from Database - Please Try Again Later");
		} else {
			res.render("show-minute", {minute:foundMinute});
		}
	});
});

router.get("/minutes/new", isLoggedIn, function(req, res) {
	res.render("new-minute");
});

router.post("/minutes/new", isLoggedIn, function(req, res) {
	var date = req.sanitize(req.body.date)
	var content = req.sanitize(req.body.minute)
	var admin = req.sanitize(req.body.admin) === 'on' ? true : false;
	newMinute = new Minute({date:date, content:content, admin:admin});
	Minute.create(newMinute, function(err, minute) {
		if (err) {
			console.log(err);
			res.send("Error Making Minute");
		} else {
			res.redirect("/admin");
		}
	});
});



// =================
// Custom Middleware
// =================
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	} 
	res.redirect("/auth");
}

const sortDate = (a, b) => {
	a = new Date(a.creation);
	b = new Date(b.creation);

	return a < b ? 1 : (a === b ? 0 : -1);
}



module.exports = router;