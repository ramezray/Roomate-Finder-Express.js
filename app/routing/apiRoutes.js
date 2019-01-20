var roomatesData = require("../data/roomates.js");
let roomates = require('../data/roomates.js');

module.exports = function (app) {

    app.get("/api/roomates", function (req, res) {
        res.json(roomatesData);
    });

    app.post("/api/roomates", function (req, res) {
        let new_data = (req.body);
        console.log(new_data);
        
        let user_res = new_data.scores
        let matchPerson = "";
        let matchImg = "";
        let totalDif = 10000;

        for (let i = 0; i < roomates.length; i++) {
            let diff = 0;
            for (let j = 0; j < user_res.length; j++) {
                diff += Math.abs(parseInt(roomates[i].scores[i]) - parseInt(user_res[j]));
                if (diff < totalDif) {
                    // totalDif = diff;
                    matchPerson = roomates[i].name;
                    matchImg = roomates[i].photo;
                }
            }
            roomates.push(new_data);

            res.json({
                status: 'OK',
                matchPerson: matchPerson,
                matchImg: matchImg
            });
        }
    })
};