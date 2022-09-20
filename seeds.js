var mongoose = require("mongoose"),
	Minute = require("./models/minute"),
	Idea = require("./models/idea")

var data = [
	{
		creation: new Date(),
		date: "4 April 2017", 
		year: 2020,
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nisl auctor, iaculis est in, ullamcorper dui. Integer dolor orci, porta sit amet lorem sit amet, porttitor aliquam neque. Vivamus convallis sit amet risus id ultricies. Mauris felis leo, dictum eget volutpat eu, pulvinar sed augue. Cras feugiat ultrices condimentum. Quisque sit amet elementum nunc. Suspendisse eu velit bibendum, cursus tellus ullamcorper, pharetra enim.   Vivamus consectetur risus justo, eget commodo metus aliquet sit amet. Praesent ac tellus non lectus viverra accumsan. Aliquam consectetur est turpis, at gravida felis euismod sed. Donec ac nulla sit amet odio varius tincidunt. Aliquam tincidunt porttitor risus, quis accumsan lacus scelerisque pharetra. Aenean magna nunc, venenatis et feugiat at, varius id nunc. Cras id felis non diam tempus posuere. Phasellus in tortor ut ipsum sagittis eleifend nec vitae lectus. Nullam non tortor tincidunt, ullamcorper purus ut, porttitor turpis. Cras luctus nisi sed tortor volutpat malesuada. Fusce a est vel dolor laoreet ultrices. Sed accumsan tortor id enim auctor rutrum. Ut placerat scelerisque nunc in lacinia."
	},
	{
		creation: new Date(),
		date: "11 April 2017", 
		year: 2020,
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nisl auctor, iaculis est in, ullamcorper dui. Integer dolor orci, porta sit amet lorem sit amet, porttitor aliquam neque. Vivamus convallis sit amet risus id ultricies. Mauris felis leo, dictum eget volutpat eu, pulvinar sed augue. Cras feugiat ultrices condimentum. Quisque sit amet elementum nunc. Suspendisse eu velit bibendum, cursus tellus ullamcorper, pharetra enim.   Vivamus consectetur risus justo, eget commodo metus aliquet sit amet. Praesent ac tellus non lectus viverra accumsan. Aliquam consectetur est turpis, at gravida felis euismod sed. Donec ac nulla sit amet odio varius tincidunt. Aliquam tincidunt porttitor risus, quis accumsan lacus scelerisque pharetra. Aenean magna nunc, venenatis et feugiat at, varius id nunc. Cras id felis non diam tempus posuere. Phasellus in tortor ut ipsum sagittis eleifend nec vitae lectus. Nullam non tortor tincidunt, ullamcorper purus ut, porttitor turpis. Cras luctus nisi sed tortor volutpat malesuada. Fusce a est vel dolor laoreet ultrices. Sed accumsan tortor id enim auctor rutrum. Ut placerat scelerisque nunc in lacinia."
	},
	{
		creation: new Date(),
		date: "18 April 2017", 
		year: 2020,
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nisl auctor, iaculis est in, ullamcorper dui. Integer dolor orci, porta sit amet lorem sit amet, porttitor aliquam neque. Vivamus convallis sit amet risus id ultricies. Mauris felis leo, dictum eget volutpat eu, pulvinar sed augue. Cras feugiat ultrices condimentum. Quisque sit amet elementum nunc. Suspendisse eu velit bibendum, cursus tellus ullamcorper, pharetra enim.   Vivamus consectetur risus justo, eget commodo metus aliquet sit amet. Praesent ac tellus non lectus viverra accumsan. Aliquam consectetur est turpis, at gravida felis euismod sed. Donec ac nulla sit amet odio varius tincidunt. Aliquam tincidunt porttitor risus, quis accumsan lacus scelerisque pharetra. Aenean magna nunc, venenatis et feugiat at, varius id nunc. Cras id felis non diam tempus posuere. Phasellus in tortor ut ipsum sagittis eleifend nec vitae lectus. Nullam non tortor tincidunt, ullamcorper purus ut, porttitor turpis. Cras luctus nisi sed tortor volutpat malesuada. Fusce a est vel dolor laoreet ultrices. Sed accumsan tortor id enim auctor rutrum. Ut placerat scelerisque nunc in lacinia."
	},
	{
		creation: new Date(),
		date: "1 April 2017", 
		year: 2020,
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nisl auctor, iaculis est in, ullamcorper dui. Integer dolor orci, porta sit amet lorem sit amet, porttitor aliquam neque. Vivamus convallis sit amet risus id ultricies. Mauris felis leo, dictum eget volutpat eu, pulvinar sed augue. Cras feugiat ultrices condimentum. Quisque sit amet elementum nunc. Suspendisse eu velit bibendum, cursus tellus ullamcorper, pharetra enim.   Vivamus consectetur risus justo, eget commodo metus aliquet sit amet. Praesent ac tellus non lectus viverra accumsan. Aliquam consectetur est turpis, at gravida felis euismod sed. Donec ac nulla sit amet odio varius tincidunt. Aliquam tincidunt porttitor risus, quis accumsan lacus scelerisque pharetra. Aenean magna nunc, venenatis et feugiat at, varius id nunc. Cras id felis non diam tempus posuere. Phasellus in tortor ut ipsum sagittis eleifend nec vitae lectus. Nullam non tortor tincidunt, ullamcorper purus ut, porttitor turpis. Cras luctus nisi sed tortor volutpat malesuada. Fusce a est vel dolor laoreet ultrices. Sed accumsan tortor id enim auctor rutrum. Ut placerat scelerisque nunc in lacinia."
	}
];

function seedDB() {
	Minute.remove({}, function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log("Removed Minutes");
			Idea.remove({}, function(err) {
				if (err) {
					console.log(err);
				} else {
					console.log("Removed Ideas");
				}
			});
		}
	});
}

module.exports = seedDB;