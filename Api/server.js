var express 	= require('express');

var PORT 		= 8000;
var app 		= express();

app.use(express.static(__dirname + './../'));


app.listen(PORT,function(){
	console.log('Listening on http://localhost:%s',PORT);
	console.log('Stop Server with CTRL + C');
});
