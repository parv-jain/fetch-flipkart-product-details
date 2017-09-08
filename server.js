var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

var url = require('url');

app.get('/flipkart', function(req, res){
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  var uri = query.q;
  request(uri, function(error, response, body){
    if(!error){
      var $ = cheerio.load(body);
      var json = { title : "", current_price : "", mrp : ""};
      json.title = $("[class='_3eAQiD']").text();
      json.current_price = $("[class='_1vC4OE _37U4_g']").text().replace('₹', '');
      json.mrp = $("[class='_3auQ3N _16fZeb']").text().replace('₹', '');
    }
    res.send(json);
  })
})

app.listen('3000')

console.log('Magic happens on port 3000');

exports = module.exports = app;
