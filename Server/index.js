console.log('Running File: index.js')
//-- Create Express Server:


var express = require('express');
var cors = require('cors');
var app = express();
 
app.use(cors());
var util = require('util');


var mysql = require('mysql');
var home;
var singleSite;
var multiSites;
var feed;
var con = mysql.createConnection({
    host : 'localhost',
    user: 'node',
    password : 'arafat1990!@#$',
    database: "iTour"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


// home page get all sites info
  app.get('/home', function(req, res){

    var query =  "SELECT * FROM itour.sites INNER JOIN itour.properties WHERE itour.sites.id=itour.properties.id";

    con.query(query, function (err, result, fields) {
      if (err) throw err;
      
      
      home=result;
     });

      res.send(home);
  });




  // for display comments and rating in singleSite page 
  app.get('/singleSite', function(req, res){

    singleSite='';
    
    var queryString;

      queryString= 'SELECT * FROM itour.feedback ';

    con.query(queryString, function (err, result, fields) {
      if (err) throw err;
      console.log('');
      singleSite=result;res.send(result);
    });
     
  });


  // used to get rating to display it on multiSites page (print stars)
  app.get('/multiSites', function(req, res){

    singleSite='';
    
    var queryString;

      queryString= 'SELECT * FROM itour.feedback ';

    con.query(queryString, function (err, result, fields) {
      if (err) throw err;
      console.log('');
      singleSite=result;res.send(result);
    });
     
  });


  // not in use
  app.post('/singleSite', function(req, res) {
  
    
    var data = req.headers;
      console.log('request received:', data);

      queryString= 'SELECT siteName FROM itour.feedback Where id='+data;
      console.log(queryString);

       con.query(queryString, function (err, result, fields) {
         if (err) throw err;
         
         console.log(result);
       });
     

    });



    // insert Comment
    app.post('/', function(req, res) {
  
      console.log('request received **');
      var site_id = req.headers.site;
      var site_name ='';
      var user_name = req.headers.user;
      var comment = req.headers.comment;
      var rating = req.headers.rating;

      queryString= 'SELECT siteName FROM itour.feedback Where siteNumber='+site_id;
      console.log(queryString);
 
       con.query(queryString, function (err, result, fields) {
         if (err) throw err;
         site_name =result[0].siteName;
         var insertQuery = "INSERT INTO itour.feedback (siteName, username, comment,rating,siteNumber)  VALUES ('"+site_name+"','"+user_name+"','"+comment+"',"+rating+","+site_id+")";
       
       console.log(insertQuery);
       con.query(insertQuery, function (err, result, fields) {
        if (err) throw err;
        
      });
      });
       });
       
       
 
app.listen(3000);