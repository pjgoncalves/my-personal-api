var express = require('express');
var colors = require('colors');
var mongoose = require('mongoose');

var app = express();
var port = 5000;


/* api routers*/
var dudeRouter = express.Router();



mongoose.connect('mongodb://localhost/test');
 
	/*Dude's schema*/

var Dude = mongoose.model('Person', { 
									name: String, 
									firstName: String,
									lastName: String,
									birthYear: Number,
									siblings: Boolean, 
									child: Boolean,
									description: String,
									hobbies: Array
								});
	

	/* Generating a default Dude */
var Dude = new Dude({ 
						name: 'Pedro - - Gonçalves', 
						firstName: 'Pedro', 
						lastName: 'Gonçalves',
						birthYear: 1900,
						siblings: true, 
						child: false,
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
						hobbies: ['surfing', 'live music', 'wannabe guitar player', 'dog walking']
					});
	/*	Saves the default Dude*/
Dude.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(colors.green.underline('smile and wave boys..'));
  }
});





	/*	API router functions - api response options*/

app.get('/dudes', function(req, res){
	mongoose.model('Person').find(function(err, dudes){
		res.send(dudes)
	});
});



app.listen(5000, function(err){
	console.log(colors.inverse('running server on port' + port));
});