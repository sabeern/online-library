const express = require('express');
const app = express();

const home = require('./router/home_load');
const arrivals = require('./router/arrivals');
const bookDetails1 = require('./router/bookDetail1');
const bookDetails2 = require('./router/bookDetails2');
const default_page = require('./router/load404');

app.set('view engine','ejs');
app.use(express.static('public'));
app.listen(3000,()=>console.log('connected to server'));

app.get('/',home);
app.get('/newArrivals',arrivals);
app.post('/bookDetails',bookDetails1);
app.get('/bookDetails',bookDetails2);
app.use(default_page);
