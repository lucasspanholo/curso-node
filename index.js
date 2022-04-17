const express = require("express");
const { ppid } = require("process");
const app = express();

app.get("/", function(req, res){
    res.send("Seja bem vindo ao meu app");
});

app.get("/sobre", function(req, res){
    res.send("Minha página sobre");
});

app.get("/blog", function(req, res){
    res.send('bem vindo ao meu blog')
});

app.get('/ola/:cargo/:nome/:cor', function(req,res){
    res.send("<h1>Olá "+req.params.nome+"</h1>"+"<h2>Seu cargo é: "+req.params.cargo+"</h2>"+"<h2>Cor favorita: "+req.params.cor+"</h2>");
});


app.listen(8081, function(){
    console.log("servidor rodando na url hhtp://localhost:8081")
});