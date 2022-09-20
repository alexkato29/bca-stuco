// Requires
var mongoose = require("mongoose");

// Schema Setup
var ideaSchema = new mongoose.Schema({
	creation: {type: Date, default: Date.now},
	date: String,
	content: String,
	subject: String,
	email: String,
	author: String,
	anonymous: Boolean
});

module.exports = mongoose.model("Idea", ideaSchema);