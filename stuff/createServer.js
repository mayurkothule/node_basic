var http=require('http');

var server=http.createServer(function(req,res){
  console.log('request by made:'+req.url);
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('hey ninjas');
});

server.listen(3000,'127.0.0.1');

console.log('hey, now your server listening to port 3000');
