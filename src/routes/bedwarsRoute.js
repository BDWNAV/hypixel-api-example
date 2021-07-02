const express = require("express");
const router = express.Router();
const config = require("../config.json");
const Hypixel = require("hypixel-api-reborn");
const client = new Hypixel.Client(config.hypixelApiKey);

router.get('/', (req, res) => {
    res.render('bedwars');
});

router.post('/', (req, res) => {
    client.getPlayer(req.body.username).then((player) => {
        console.log(player.stats.bedwars.wins);
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router;