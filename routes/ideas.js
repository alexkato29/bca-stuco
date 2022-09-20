// =============
//    Requires
// =============
var	express 			  = require("express"),
	mongoose 			  = require("mongoose"),
	passport 			  = require("passport"),
	bodyParser 		  	  = require("body-parser")
	
var router = express.Router({mergeParams:true});

var User   = require("../models/user"),
	Idea   = require("../models/idea")



// ================
// 		Routes
// ================
router.get("/ideas/new", function(req, res) {
	res.render("feedback");
});

router.post("/ideas/new", function(req, res) {
	var author = req.sanitize(req.body.name);
	var email = req.sanitize(req.body.email);
	var subject = req.sanitize(req.body.subject);
	var content = req.sanitize(req.body.feedback);
	var anonymous = req.body.anonymous == "on" ? true : false;
	newIdea = new Idea({author:author, content:content, email:email, subject:subject, anonymous:anonymous});
	Idea.create(newIdea, function(err, newIdea) {
		if (err) {
			console.log(err);
			res.send("Error Submitting - Try Again Later");
		} else {
			res.send("Submitted Successfully! Click <a href='/'>here</a> to go back to the homepage.");
		}
	});
});

router.get("/ideas/all", isLoggedIn, function(req, res) {
	Idea.find({}).sort("-date").exec(function(err, ideas) {
		if (err) {
			console.log(err);
			res.send("Error Fetching from Database - http://bcastuco.com/ideas/all - User Authenticated - Could Not Fetch Feedback from Database, Fix Problem or Try Again Later - Please Contact Alex");
		} else {
			ideas = ideas.sort(sortDate);
			res.render("all-ideas", {ideas:ideas});
		}
	});
});

router.get("/ideas/show/:id", function(req, res) {
	Idea.findById(req.params.id, function(err, foundIdea) {
		if (err) {
			res.send("Error - Try The Request Later")
		} else {
			res.render("show-idea", {idea:foundIdea});
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