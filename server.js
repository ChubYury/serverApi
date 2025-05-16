const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./routes');

app.use(routes);
app.get('/', (_req, res) => res.send('Hello server api'));

app.listen(process.env.PORT, err => {
  console.log('-------------------'); 
  err ? console.log(err) : console.log('Express listen port: ' + process.env.PORT);
  console.log('-------------------');
});