var roomatesData = require("../data/roomates.js");
// console.log(roomatesData);


module.exports = function (app) {

    app.get("/api/roomates", function (req, res) {
        res.json(roomatesData);
    });

    app.post("/api/roomates", function (req, res) {
        roomatesData.push(req.body)
    });

};

