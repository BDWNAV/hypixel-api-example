const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const indexRoute = require("./routes/indexRoute");
const bedwarsRoute = require("./routes/bedwarsRoute");

app.use('/', indexRoute);
app.use('/bedwars', bedwarsRoute);

app.listen(3000, () => {
    console.log("On http://localhost:3000");
});