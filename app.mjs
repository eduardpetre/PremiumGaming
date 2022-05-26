const hostname = '127.0.0.1';
const port = 3000;

import express from 'express';
const app = express();

app.set('view engine', 'ejs');
import ejs from 'ejs';
app.engine('html', ejs.renderFile);
app.use("/static", express.static("./static/"));

const games = [
    {
        "name": "Rocket League",
        "cumpara": "ok",
        "serviciu": "standard",
        "stergere" : "ok"
    },
    {
        "name": "Counter-Strike: GO",
        "cumpara": "ok",
        "serviciu": "standard",
        "stergere" : "ok"
    },
    {
        "name": "League of Legends",
        "cumpara": "ok",
        "serviciu": "standard",
        "stergere" : "ok"
    },
    {
        "name": "Valorant",
        "cumpara": "ok",
        "serviciu": "standard",
        "stergere" : "ok"
    },
   {
        "name": "TFT: Teamfight Tactics",
        "cumpara": "ok",
        "serviciu": "standard",
        "stergere" : "ok"
    }];


import parseUrl from 'body-parser';
// let parseUrl = require('body-parser');
import res from 'express/lib/response.js';
// const res = require('express/lib/response');
let encodeUrl = parseUrl.urlencoded({ extended: false });
let serviciu = "Standard";
let wtbGames = [];

app.post("/views", encodeUrl, (req, res) => {
    if (req.body.fav_plan != null){
        serviciu=req.body.fav_plan;
        for (let i=0;i<games.length;i++)
            games[i].serviciu=serviciu;
        console.log("Serviciu: ", serviciu);
    }

    if (req.body.wtb0 != null && games[0].cumpara=="ok"){
        wtbGames.push(req.body.wtb0);
        games[0].cumpara="not ok";
    }
    if (req.body.wtb1 != null && games[1].cumpara=="ok"){
        wtbGames.push(req.body.wtb1);
        games[1].cumpara="not ok";
    }
    if (req.body.wtb2 != null && games[2].cumpara=="ok"){
        wtbGames.push(req.body.wtb2);
        games[2].cumpara="not ok";
    }
    if (req.body.wtb3 != null && games[3].cumpara=="ok"){
        wtbGames.push(req.body.wtb3);
        games[3].cumpara="not ok"
    }
    if (req.body.wtb4 != null && games[4].cumpara=="ok"){
        wtbGames.push(req.body.wtb4);
        games[4].cumpara="not ok"
    }
    
    console.log("Serviciu: ", serviciu,"Jocurile mele: ", wtbGames);
    res.redirect("/views/page4.ejs");
})

app.get("/views/page4.ejs/jocurilemele", (req, res) => {
    let afiseaza = "";
    if (wtbGames.length != 0)
        afiseaza = 'Ai revendicat jocurile cu succes! Te poti juca ' + wtbGames + " la o calitate " + serviciu + ". Alege jocul preferat si incepe acum!";
    else
        afiseaza = "Abonamentul a expirat, nu ai revendicat niciun joc sau acestea au fost sterse!";
    console.log("Afisare jocurile mele");
    res.send(afiseaza);
})

app.put("/views/page4.ejs/update/:jsonBody", (req, res) => {
    let jsonObj = JSON.parse(req.params.jsonBody);
    serviciu = "Premium";
    for (let i=0;i<games.length;i++)
        games[i].serviciu=serviciu;
    console.log("Update: serviciu premium");
    res.redirect("");
});

app.delete("/views/page4.ejs/delete/:jsonBody", (req, res) => {
    wtbGames = [];
    for (let i=0;i<games.length;i++)
        games[i].cumpara="ok";
    console.log("Toate jocurile au fost sterse");
    res.redirect("");
})

app.get("/", (req, res) => {
    res.render("pages/index.ejs");
})

app.get("/views/index.ejs", (req, res) => {
    res.render("pages/index.ejs");
})

app.get("/views/page2.ejs", (req, res) => {
    res.render("pages/page2.ejs");
})

app.get("/views/page3.ejs", (req, res) => {
    res.render("pages/page3.ejs");
})

app.get("/views/page4.ejs", (req, res) => {
    res.render("pages/page4.ejs");
})

app.use(function(req, res) {
    res.status(404);
    if (req.accepts('html')) {
        res.render('pages/404.html', { url: req.url });
        return;
      }
}); 

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
 });