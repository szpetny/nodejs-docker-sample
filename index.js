'use strict';

const express = require('express');
const fs = require('fs');

const app = express();
 
app.set('views', './');
app.set('view engine', 'pug');
 
app.get('/', function(req, res) {
  
  fs.readFile('GIRAFFE.RLS.json', function(err, data) {
  	//console.log(JSON.stringify(JSON.parse(data)));
	res.render('index', {
		data:  JSON.stringify(JSON.parse(data))
	});
  });    
});

app.listen(3000, function () {
  console.log('app listening on port 3000!')
});
