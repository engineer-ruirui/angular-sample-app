const express = require('express');

const app = express();

app.use(express.static('./dist/angular-heroku'));

const path = require('path');
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 8080);