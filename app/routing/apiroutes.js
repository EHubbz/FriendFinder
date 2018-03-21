var friendData = require("../data/friends.js");
var path = require("path");

module.exports = function(app) {

 app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    var userScores = newFriend.answers
    var matchName = "";
    var matchPic = "";
    var totalDifference = 100;

    for (var i = 0; i < friendData.length; i++) {
    	var diff = 0;
    	for (var j = 0; j < userScores.length; j++) {
    		diff += Math.abs(friendData[i].answers[j] - userScores[j]);
    	} 
    if (diff < totalDifference) {
    	totalDifference = diff;
    	matchName = friendData[i].name;
    	matchPic = friendData[i].photo;
    }
   }

  friends.push(newFriend);

  res.json(newFriend);
});
};