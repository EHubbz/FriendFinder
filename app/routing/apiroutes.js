var friendData = require("../data/friends.js");
var path = require("path");

module.exports = function(app) {

 app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

 app.post("/api/friends", function(req, res) {
//store newFriend data
    var newFriend = req.body;
    var responses = newFriend.answers;
//setiing variables to store most compatible match data
    var matchName = "";
    var matchPic = "";
    var totalDifference = 100;

//multiple attempts at reworking the code and match but can't get calculations to find closest match
    for (var i = 0; i < friendData.length; i++) {
    	var diff = 0;
    	for (var j = 0; j < responses.length; j++) {
    		diff += Math.abs(friendData[i].answers[j] - responses[j]);
    	} 
    if (diff < totalDifference) {
    	
    	matchName = friendData[i].name;
    	matchPic = friendData[i].photo;
    }
   }
//new friend does get added to the array
  friendData.push(newFriend);
  //newFriend does show up in array on api/friends
  res.json(newFriend);
});
};