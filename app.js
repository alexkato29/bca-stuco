const port = process.env.PORT || 80;

// Test Comment

// =============
//    Requires
// =============
var seedDB 				  = require("./seeds"),
	express 			  = require("express"),
	mongoose 			  = require("mongoose"),
	passport 			  = require("passport"),
	bodyParser 		  	  = require("body-parser"),
	User 				  = require("./models/user"),
	localStrategy 		  = require("passport-local"),
	methodOverride 	 	  = require("method-override"),
	expressSanitizer 	  = require("express-sanitizer"),
	passportLocalMongoose = require("passport-local-mongoose")

var indexRoutes 	 = require("./routes/index"),
	ideaRoutes       = require("./routes/ideas"),
	minuteRoutes 	 = require("./routes/minutes"),
	announcementRoutes = require("./routes/announcement")


var app = express();

// ==============
// Configurations
// ==============

// No Sleep
// setInterval(function() {
//     http.get("https://www.bcastuco.com");
// }, 1500000);

// Uses and View Engine
mongoose.connect("******");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(expressSanitizer());

// Passport Configuration
app.use(require("express-session")({
	secret: "******",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware to Check if the User is Logged In and Displays Navbar Items Accordingly
app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

// Uses All the Routes that are in the Separate Route Files
app.use(indexRoutes);
app.use(minuteRoutes);
app.use(ideaRoutes);
app.use(announcementRoutes);

app.get("*", function(req, res) {
	res.send("404 Error - Page Not Found");
});

// ==========
//    Host
// ==========
app.listen(port, function() {
	console.log("Hosted on port 8000");
});