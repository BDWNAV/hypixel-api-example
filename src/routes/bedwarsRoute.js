const express = require("express");
const router = express.Router();
const config = require("../config-example.json");
const Hypixel = require("hypixel-api-reborn");
const client = new Hypixel.Client(process.env.hypixelApiKey);

router.get('/', (req, res) => {
    res.render('bedwars');
});

router.post('/', (req, res) => {
    res.redirect(`bedwars/stats/${req.body.username}`)
});

router.get('/stats/:user', (req, res) => {
    client.getPlayer(req.params.user).then((player) => {
        res.render('bedwarstats', {
            player: player,
            level: player.stats.bedwars.level,
            wins: player.stats.bedwars.solo.wins,
            winstreak: player.stats.bedwars.solo.winstreak,
            beds: player.stats.bedwars.solo.beds.broken,
            kills: player.stats.bedwars.solo.kills,
            finalKills: player.stats.bedwars.solo.finalKills,
            lostBeds: player.stats.bedwars.solo.beds.lost,
            deaths: player.stats.bedwars.solo.deaths,
            lostGames: player.stats.bedwars.solo.losses,
        });
    }).catch((err) => {
        console.log(err);
        return res.send("A error has occured, there is probaly no record of that user playing bedwars or that user does not exist.");
    });
})

module.exports = router;