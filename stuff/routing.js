var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
  console.log('request by made:'+req.url);
  if(req.url==='/home' || req.url==='/'){

    res.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream=fs.createReadStream(__dirname+'/index.html');
    myReadStream.pipe(res);

  }
  else if (req.url==='/contact') {
    res.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream=fs.createReadStream(__dirname+'/contact.html');
    myReadStream.pipe(res);

  }
  else if (req.url==='/api/ninjas') {
    res.writeHead(200,{'Content-Type':'application/json'});
    var myObj={
      'name':'Mayur',
      'job':'developer',
      'city':'Pune'
    }
    res.end(JSON.stringify(myObj));
  }
  else {
    res.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream=fs.createReadStream(__dirname+'/404.html');
    myReadStream.pipe(res);
  }
});

server.listen(3000,'127.0.0.1');

console.log('hey, now your server listening to port 3000');
