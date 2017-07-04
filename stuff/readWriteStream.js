var http=require('http');
var fs=require('fs');

var myReadStream=fs.createReadStream(__dirname+'/readMe.txt','utf8');//dirname means our cuurent directory
var myWriteStream=fs.createWriteStream(__dirname+'/newWriteMe.txt')

myReadStream.on('data',function(chunck) {
  console.log('new chunck is received');
  console.log(chunck);
  myWriteStream.write(chunck);
});
