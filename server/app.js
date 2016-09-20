var express = require( 'express');
var app = express();
var path = require( 'path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded ( {extended: false});
var port = process.env.PORT || 4000;

//spin up server
app.listen(port, function(){
  console.log('serverup on', port);
});

// base
app.get( '/', function( req, res ){
  console.log( 'base URL hit' );
  res.sendFile( path.resolve('public/index.html') );
}); // end base url

// static public folder
app.use( express.static( 'public' ) );
