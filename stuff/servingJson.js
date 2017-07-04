var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
  console.log('request by made:'+req.url);
  res.writeHead(200,{'Content-Type':'application/json'});
  var myObj={
    'name':'Mayur',
    'job':'developer',
    'city':'Pune'
  }

  res.end(JSON.stringify(myObj));

});

server.listen(3000,'127.0.0.1');

console.log('hey, now your server listening to port 3000');
