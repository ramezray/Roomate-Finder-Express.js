const express = require("express");

let app = express();
let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.get("/", function (req, res) {
    res.json(path.join(__dirname, "public/home.html"));
});

app.listen(PORT, function () {
    console.log("App listening on PORT: localhost:" + PORT);
});