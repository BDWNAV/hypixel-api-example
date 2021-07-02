const express = require("express");
const router = express.Router();
const config = require("../config-example.json");
const Hypixel = require("hypixel-api-reborn");
const client = new Hypixel.Client(process.env.hypixelApiKey);

router.get('/', (req, res) => {
    res.render('bedwars');
});

router.post('/', (req, res) => {
    client.getPlayer(req.body.username).then((player) => {
        res.render('bedwarstats', {
            player: player,
            level: player.stats.bedwars.level,
            wins: player.stats.bedwars.wins 
        });
    }).catch((err) => {
        console.log(err);
        return res.send("A error has occured, there is probaly no record of that user playing bedwars or that user does not exist.");
    });
});

module.exports = router;