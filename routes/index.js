// =============
//    Requires
// =============
var	express 			  = require("express"),
	mongoose 			  = require("mongoose"),
	passport 			  = require("passport"),
	bodyParser 		  	  = require("body-parser")
var router = express.Router({mergeParams:true});

var User   = require("../models/user"),
	Minute = require("../models/minute"),
	Annoucement = require("../models/announcement")



// ================
// 		Routes
// ================
router.get("/", function(req, res) {
	Minute.find({}).sort("-date").exec(function(err, minutes) {
		if (err) {
			console.log(err);
		} else {
			Annoucement.find({}).sort("-date").exec(function(err, announcements) {
				if (err) {
					console.log(err);
				} else {
					minutes = minutes.sort(sortDate);
					announcements = announcements.sort(sortDate);
					res.render("landing", {minutes:minutes, minuteCount:0, announcements:announcements, announcementCount:0});
				}

			});
		}
	});
});

// router.get("/register", function(req, res) {
// 	res.render("register");
// });

// router.post("/register", function(req, res) {
// 	var newUser = new User({username: req.body.username});
// 	User.register(newUser, req.body.password, function(err, user) {
// 		if (err) {
// 			console.log(err);
// 			return res.render("register");
// 		}
// 		passport.authenticate("local")(req, res, function() {
// 			res.redirect("/admin");
// 		});
// 	});
// });

router.get("/reps", function(req, res) {
	res.render("meet-reps");
});

router.get("/auth", function(req, res) {
	res.render("login");
});

router.post("/auth", 
	passport.authenticate("local", {
		successRedirect: "/admin",
		failureRedirect: "/auth"
	}), function(req, res) {
		res.send("Logging In");
});

router.get("/admin", isLoggedIn, function(req, res) {
	res.render("admin");
});

router.get("/logout", function(req, res) {
	req.logout();
	res.redirect("/");
});

router.get('/download', function(req, res){
  var file = '../months/feb2018.pdf';
  res.download(file);
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