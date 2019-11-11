var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var friendMatch = {
            name: "",
            photo: "",
            friendsDiff: 0
        };
        
        var userInfo = req.body;
        var userScores = userInfo.scores;
        var totalDiff;

        //loop through all the friends in database
        for (var i = 0; i < length.friends; i++) {
            
            //loop through each person's scores
            var friendOption = friends[i];
            for (j = 0; j < friendOption.scores.length; j++) {
                var friendOptionScore = friendOption.scores[j];
                //compare the user scores to the friend scores...
                //tally the sum of differences in the scores...
            }
        }
        //determine the smallest difference in scores...
        //that person becomes the best match
    });
};
