// Requires
var mongoose = require("mongoose");

// Schema Setup
var minuteSchema = new mongoose.Schema({
	creation: {type: Date, default: Date.now},
	date: String,
	admin: Boolean,
	content: String
});

module.exports = mongoose.model("Minute", minuteSchema);