const express = require("express");
const router = express.Router();
const config = require("../config-example.json");
const hypixelAPI = require("hypixel-api");
const client = new hypixelAPI(config.hypixelApiKey);

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', (req, res) => {
    client.getPlayer('name', req.body.username).then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router;