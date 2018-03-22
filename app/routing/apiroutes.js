var friendData = require("../data/friends.js");
var path = require("path");

module.exports = function(app) {

 app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

 app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    var userAnswers = newFriend.answers;
 });

app.post("/api/friends", function(req, res) {
    var match = req.body;
    var userScores = match.answers
    var matchName = "";
    var matchPic = "";
    var totalDifference = 100;

    for (var i = 0; i < friends.length; i++) {
    	var diff = 0;
    	for (var j = 0; j < userScores.length; j++) {
    		diff += Math.abs(friends[i].answers[j] - userScores[j]);
    	} 
    if (diff < totalDifference) {
    	totalDifference = diff;
    	matchName = friends[i].name;
    	matchPic = friends[i].photo;
    }
   }

  friendData.push(newFriend);

  res.json(newFriend);
});
};