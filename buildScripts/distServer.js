import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 8080;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){

  // Hard coding for simplicity. Pretend this hits a real database

  res.json([
    {"id":1, "firstName": "Bob", "lastName": "Smith", "email":"bob@gmail.com"},
    {"id":1, "firstName": "Tammy", "lastName": "Norton", "email":"tnorton@gmail.com"},
    {"id":1, "firstName": "Tina", "lastName": "Lee", "email":"lee.tina@gmail.com"}

  ]);
});



app.listen(port, function(err){
  if(err){
    console.log(err)
  }
  else{
    open('http://localhost:' + port);
  }
});
