// =============
//    Requires
// =============
var	express 			  = require("express"),
	mongoose 			  = require("mongoose"),
	passport 			  = require("passport"),
	bodyParser 		  	  = require("body-parser")
	
var router = express.Router({mergeParams:true});

var User   = require("../models/user"),
	Announcement = require("../models/announcement")



// ================
// 		Routes
// ================
router.get("/announcement/new", function(req, res) {
	res.render("announcement");
});

router.post("/announcement/new", function(req, res) {
	var date = req.sanitize(req.body.date);
	var subject = req.sanitize(req.body.subject);
	var content = req.sanitize(req.body.content);
	newAnnouncement = new Announcement({date:date, content:content, subject:subject});
	Announcement.create(newAnnouncement, function(err, newAnnouncement) {
		if (err) {
			console.log(err);
			res.send("Error Submitting - Try Again Later");
		} else {
			res.send("Submitted Successfully! Click <a href='/'>here</a> to go back to the homepage.");
		}
	});
});

router.get("/announcement/all", function(req, res) {
	Announcement.find({}).sort("-date").exec(function(err, announcements) {
		if (err) {
			console.log(err);
			res.send("Error Fetching from Database - http://bcastuco.com/announcements/all - Error Code: 502 - User is " + isLoggedIn ? "Authenicated" : "NOT Authenticated" + " - Could Not Fetch Announcements from Database, Try Again Later - Please Contact ****** Should the Problem Persist.");
		} else {
			announcements = announcements.sort(sortDate);
			res.render("all-announcements", {announcements:announcements});
		}
	});
});

router.get("/announcement/show/:id", function(req, res) {
	Announcement.findById(req.params.id, function(err, foundA) {
		if (err) {
			res.send("Error - Try The Request Later")
		} else {
			res.render("show-announcement", {announcement:foundA});
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