const express = require('express');

const bodyParser = require('body-parser');
const mongoose= require('mongoose');

// set up express app
const app = express();

//connect to mondodb        //localhost
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise=global.Promise;

app.use(bodyParser.json());

//initialize routes
app.use('/api', require('./routes/api'));

// listen for requests
app.listen(process.env.PORT, process.env.IP, function(){
 console.log('now listening for requests');
 
}); 