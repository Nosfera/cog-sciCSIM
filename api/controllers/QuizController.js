/**
 * QuizController
 *
 * @description :: Server-side logic for managing quizzes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var sc = 0;
var cl = "white";
module.exports = {

	implicitView: function(req,res){
		Test.findOne({used: "no"},function(err, found){			
			Test.update(found.id, {used: "yes"}, function(err, test){
			});

			return res.view('quiz/implicit',{
				color: cl,
				test: found
			});
		});	
	},
	explicitView: function(req, res){
		Test.findOne({used: "no"},function(err, found){			
			Test.update(found.id, {used: "yes"}, function(err, test){
			});
			return res.view('quiz/explicit',{
				score: sc,
				test: found
			});
		});	
	},
	implicitAnswer: function(req, res){
		//cl
		if(req.param('right') == "True"){
			cl = "blue";
		}else{
			cl = "red";
		}

		Answer.create({name: req.param('rightname'), result: req.param('right')}).exec(function(err, created){
			console.log(created);
		});
		var count = 0;
		Test.count({used: 'no'}).exec(function(err, coun){
			if(err) console.log(err);
			count = count;
		});

		if(count>0){
			return res.redirect('quiz/implicit');
		}else{
			return res.redirect('quiz/iconfidence');
		}
	},
	explicitAnswer: function(req, res){
		var score = parseInt(req.param('score'));

		if(req.param('right') == "True"){
			score += 1;
		}
		else{
			score -= 1;
		}
		sc = score;
		Answer.create({name: req.param('rightname'), result: req.param('right')}).exec(function(err, created){
			console.log(created);
		});

		var count = 0;
		Test.count({used: 'no'}).exec(function(err, coun){
			if(err) console.log(err);
			count = count;
		});

		if(count>0){
			return res.redirect('quiz/explicit');
		}else{
			return res.redirect('quiz/confidence');
		}
	},
	confidenceGet: function(req, res){
		var result = 0;

		Answer.count({result: "True"}).exec(function(err,coun){
			if(err) console.log(err);
			console.log(coun);
			result += coun;

			Answer.count({result: "False"}).exec(function(err,cou){
				if(err) console.log(err);
				console.log(cou);
				result -= cou;

				return res.view('quiz/confidence',{
					score : result
				});
			});
		});
	},
	confidencePost: function(req, res){
		Confidence.create({level: req.param('level')}).exec(function(err, conf){
			return res.redirect('/quiz/thanks');
		});
	},
	iconfidenceGet: function(req, res){
		var result = 0;

		Answer.count({result: "True"}).exec(function(err,coun){
			if(err) console.log(err);
			console.log(coun);
			result += coun;

			Answer.count({result: "False"}).exec(function(err,cou){
				if(err) console.log(err);
				console.log(cou);
				result -= cou;

				return res.view('quiz/confidence',{
					score : result
				});
			});
		});
	},
	iconfidencePost: function(req, res){
		Confidence.create({level: req.param('level')}).exec(function(err, conf){
			return res.redirect('/quiz/thanks');
		});
	}
};

