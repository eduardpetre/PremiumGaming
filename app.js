const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use("/static", express.static("./static/"));

const path = require("path");

app.get("/", (req, res) => {
    res.render("index.ejs");
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


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
 });