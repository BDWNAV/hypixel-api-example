const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("./config.json");
const hypixelAPI = require("hypixel-api");
const client = new hypixelAPI(config.hypixelApiKey);

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {})