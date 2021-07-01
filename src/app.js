const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("./config-example.json");
const hypixelAPI = require("hypixel-api");
const client = new hypixelAPI(config.hypixelApiKey);

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const indexRoute = require("./routes/indexRoute");

app.use('/', indexRoute);

app.listen(3000, () => {
    console.log("On http://localhost:3000");
});