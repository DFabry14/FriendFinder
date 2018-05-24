var friends = require("../data/friends");
console.log(friends);

function apiRoutes(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })
    app.post("/api/friends", function (req, res) {
        var userAnswers = req.body.scores;
        var smallestDif = Infinity;
        var totalDif = 0;
        var bestFriend;
        for (var i = 0; i < friends.length; i++) {
            for (j = 0; j < userAnswers.length; j++) {
                totalDif += Math.abs(parseInt(userAnswers[j])) - parseInt(friends[i].scores[j]);
                if (totalDif < smallestDif) {
                    smallestDif = totalDif;
                    bestFriend = friends[i];
                }
            }
        }
        friends.push(req.body);
        res.json(bestFriend);
    })
};

module.exports = apiRoutes;