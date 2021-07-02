const express = require("express");
const router = express.Router();
const config = require("../config-example.json");
const hypixelAPI = require("hypixel-api");
const client = new hypixelAPI(config.hypixelApiKey);

router.get('/', (req, res) => {
    res.render('bedwars');
})

module.exports = router;