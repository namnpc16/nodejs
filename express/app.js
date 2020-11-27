const express = require('express');
const app = express();

// const mongodb = require('mongoose');
const db = require('./connect/db')
// const mongodb = require('mongodb').MongoClient;

const bodyParser = require('body-parser');
const cors = require('cors');
const { json } = require('body-parser');

const routerPorts = require('./router/ports');

require('dotenv').config();

db.connect();
app.use(cors());
app.use(bodyParser.json());
app.use('/port', routerPorts);

// LISTEING PORT

app.listen(process.env.PORT || 5555, function (){
    console.log(`Listening`);
});