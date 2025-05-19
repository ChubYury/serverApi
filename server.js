const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./routes');
const middlewares = require('./middlewares');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(middlewares);
// app.use(((req, res, next) => {
//   console.log('**** REQUEST *************************');
//   console.log(`${req.method} ${req.url}`);
//   console.log('**** RESPONSE *************************');
//   console.log('Access-Control-Allow-Headers: ', res.getHeader('Access-Control-Allow-Headers'));
//   console.log('Access-Control-Allow-Origin:', res.getHeader('Access-Control-Allow-Origin'));
//   console.log('Access-Control-Allow-Methods:', res.getHeader('Access-Control-Allow-Methods'));
//   console.log('Content-Security-Policy:', res.getHeader('Content-Security-Policy'));
//   console.log('Content-Type:', res.getHeader('Content-Type'));
//   console.log('***************************************');
//   next();
// }));
app.use(routes);
app.get('/', (_req, res) => res.send('Hello server api'));

app.listen(process.env.PORT, err => {
  console.log('-------------------'); 
  err ? console.log(err) : console.log('Express listen port: ' + process.env.PORT);
  console.log('-------------------');
});