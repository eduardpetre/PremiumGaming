<!-- app.get("/views/page4.ejs/jocurilemele", (req, res) => {
    let afiseaza = "";
    if (wtbGames.length != 0)
        afiseaza = 'Ai revendicat jocurile cu succes! Te poti juca ' + wtbGames + " la o calitate " + serviciu + ". Alege jocul preferat si incepe acum!";
    else
        afiseaza = "Abonamentul a expirat, nu ai revendicat niciun joc sau acestea au fost sterse!";
    console.log("Afisare jocurile mele");
    res.send(afiseaza);
}) -->

Metoda GET
- se apeleaza la apasarea butonului My Games si acceseaza linkul "views/page4.ejs/jocurilemele"
- are nevoie de variabilele wtbGames si serviciu generate prin metoda POST
- returneaza mesajul corespunzator serviciului si jocurilor cumparate

<!-- app.post("/views", encodeUrl, (req, res) => {
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
}) -->

Metoda POST
- se apeleaza la apasarea butonului Buy
- are nevoie de datele introduse in formularele cu id-ul fav_plan, ce memoreaza serviciul dorit, si id-ul wtb corespunzator jocului cumparat
- nu returneaza nimic, doar memoreaza datele in variabilele wtbGames si serviciu pentru a le putea utiliza ulterior


<!-- app.put("/views/page4.ejs/update/:jsonBody", (req, res) => {
    let jsonObj = JSON.parse(req.params.jsonBody);
    serviciu = "Premium";
    for (let i=0;i<games.length;i++)
        games[i].serviciu=serviciu;
    console.log("Update: serviciu premium");
    res.redirect("");
}); -->

Metoda PUT
- se apeleaza la apasarea butonului Activate Premium Gaming si acceseaza link-ul "/views/page4.ejs/update"
- face update de la tipul de serviciu prezent la cel premium


<!-- app.delete("/views/page4.ejs/delete/:jsonBody", (req, res) => {
    wtbGames = [];
    for (let i=0;i<games.length;i++)
        games[i].cumpara="ok";
    console.log("Toate jocurile au fost sterse");
    res.redirect("");
}) -->

Metoda DELETE
- se apeleaza la apasarea butonuli Delete All si acceseaza link-ul "/views/page4.ejs/delete"
- are nevoie de obiectul JSON pentru a verifica daca acestea pot fi sterse sau nu sunt cumparate 
- sterge toate jocurile din inventar