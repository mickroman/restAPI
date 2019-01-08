const express = require('express');
const routes = ('/routes/api');require
// set up express app

const app = express();

app.use('/api', require('./routes/api'));

// listen for requests

app.listen(process.env.PORT, process.env.IP, function(){
 console.log('now listening for requests');
 
}); 