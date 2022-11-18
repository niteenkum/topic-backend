const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
 
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
  app.use(cors(corsOpts));

/* A middleware that parses the incoming request body and makes it available under req.body property. */
app.use(express.json());

/* Telling the server to use the routes file. */
app.use('/', require("./routes"));
 
/* Telling the server to listen to the port 8000. */
app.listen(port, function(err, res){
    if(err){
        console.log("Error", err);
        return;
    }
    console.log(`Server is running on port ${port}`);
})
