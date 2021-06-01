const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db')

const router = require('./Network/router');

db('mongodb+srv://adminkim:OSFvQfVJOr2fBg10@cluster0.clwur.mongodb.net/telegram')
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends: false}));

router(app);

app.use('/app', express.static('public'))


app.listen(3000);
console.log('La aplicación esta escuchando en http://localhost:3000')