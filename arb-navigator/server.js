console.log("Beginning of file");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');
const PORT = process.env.PORT || 5000;
console.log("PORT-ENV " + process.env.PORT);
console.log("PORT " + PORT);

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(cors());
app.use(bodyParser.json());


console.log("Before Mongodb");
require('dotenv').config();
const url = process.env.MONGODB_URI;
const mongoose = require("mongoose");
console.log("Starting");
console.log(url);
mongoose.connect(url)
.then(() => console.log("Mongo DB connected"))
.catch(err => console.log(err));




var api = require('./api.js');
api.setApp( app, mongoose );
// Server static assets if in production
if (process.env.NODE_ENV === 'production') 
{
  console.log("Hello??");
  // Set static folder
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => 
 {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
app.get('/', function (req, res) {
  res.render('index', {});
});
}



//app.listen(5000); // start Node + Express server on port 5000
app.listen(PORT, () => 
{
  console.log('Server listening on port ' + PORT);
});
