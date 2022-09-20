// Requires
var mongoose = require("mongoose");

// Schema Setup
var announcementSchema = new mongoose.Schema({
	creation: {type: Date, default: Date.now},
	date: String,
	subject: String,
	content: String
});

module.exports = mongoose.model("Announcement", announcementSchema);