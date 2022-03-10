const express = require('express');
const app = express();
const PORT = 5001;
const path = require('path');
const mongoose = require('mongoose');
const linkRoute = require('./routes/linkRoute');

mongoose.connect('mongodb://localhost/newlinks', (error, db) => {
    console.log(error)
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use("/css", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css")))
app.use("/js", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js")))
app.use("/js", express.static(path.join(__dirname, "/node_modules/jquery/dist")))

app.use(express.static('public'));

app.use('/', linkRoute);

app.listen(PORT, () => {
    console.log('Server in running on PORT', PORT);
})