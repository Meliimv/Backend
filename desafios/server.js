//const { mockComponent } = require("react-dom/test-utils");

const express = require("express");
const moment = require("moment")

const app = express();

app.get("/", (req, res) => {
    res.send(<h1 style="color: blue"> Bienvenidos al servidor express</h1>)
});

let visitas = 0
app.get("/visitas", (req, res) => {
    res.send({ fyh : mockComponent().format("DD/MM/YYYY:HH:MM")} );
});
const PORT = 3000

const server = app.listen(PORT, () => {
    console.log("listening app port $(server.address().port}");
})