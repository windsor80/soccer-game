// packages
var express = require('express');

var router = express.Router();

var Leader = require("../models/Leader.model.js");

// routes for express and database manipulation

router.get('/', function(req, res){

    //res.render(__dirname, '/../main');

    //res.sendFile(path.join(__dirname, '/../main'));

    res.render('index');

});

router.get('/leaders', function(req, res){
	Leader.find({})
		.exec(function(err, leaders) {
			if(err) {
				res.send('there is something wrong here');
			} else {
				console.log(leaders);
				res.json(leaders);
			}
		});
});

router.post('/leaders', function (req, res) {
	var newLeader = new Leader();

	newLeader.name = req.body.name;
	newLeader.score = req.body.score;

	newLeader.save(function(err, leader) {
		if(err) {
			res.send('Error saving player');
		} else {
			console.log(leader);
			res.send(leader);
		}
	});
});

// router.post('/leaders', function (req, res) {
// 	Leader.create(req.body, function(err, player) {
// 		if(err) {
// 			res.send('Error saving player');
// 		} else {
// 			console.log(player);
// 			res.send(player);
// 		}
// 	});
// });


router.put('/update', function (req, res) {

 });

module.exports = router; 