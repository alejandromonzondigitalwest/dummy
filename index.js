'use strict';

const morgan = require('morgan');
const bodyParser = require('body-parser');

const express = require('express');
var cors = require('cors');
const app = express();

const routes = require('./routes.js');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':false}));

app.use('/',routes);


app.listen(3000,"0.0.0.0",()=>{
  console.log('Dummy escuchando en el puerto 3000');
});
