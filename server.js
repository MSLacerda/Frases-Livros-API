let search = require('./functions');
const express = require('express');
const bodyParser = require('body-parser');

// Iniciando o app.
const app = express();

app.use(bodyParser.json());

app.get('/', function(request, response) {
  console.log("OK Computer");
  response.send("OK Computer. AlluGo! - API de Frases by: Saulo Joab (saulojoabps@gmail.com) - 2019");
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Ok Computer. Port: ' + listener.address().port);
});

app.get('/frases', function (req, res) 
{
    res.send(search.getAll());
});

app.get('/fraseid', function (req, res)
{
    res.send(search.findByID(parseInt(req.query.id)));
});

app.post('/procurarFrase', function (req, res)
{
    console.log("Buscando por Frase!");
    console.log("Frase procurada: " + req.body.frase);
    res.send(search.findByPhrase(req.body.frase));
});

app.post('/frasesPorAutor', function (req, res)
{
    console.log("Buscando por Autor!");
    console.log("Autor procurado: " + req.body.autor);
    res.send(search.findByAuthor(req.body.autor));
});

app.post('/frasesPorLivro', function (req, res)
{
    console.log("Buscando por Livro!");
    console.log("Livro procurado: " + req.body.livro);
    res.send(search.findByBook(req.body.livro));
});
