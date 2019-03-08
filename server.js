const express = require("express");
const path = require("path");
var bodyParser = require('body-parser');
// invoke var express and store the resulting application in var app
const app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=> {
    res.render('index');
})
app.post('/process', (req, res) => {
    console.log(req.body);
    res.redirect('/')
})
app.post('/process', (req, res) => {
    res.render('results', { data: req.body});
})
app.listen(8000, function() {
    console.log("listening on port 8000!");
})