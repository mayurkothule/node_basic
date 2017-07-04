var fs =require('fs')

// delete file
//fs.unlink('writeMe.txt');//make sure you have this file before delete operation


//sunchronous way
fs.mkdirSync('stuff');

//fs.rmdirSync('stuff');


//Asunchronous way
// fs.mkdir('stuff',function(){
//   fs.readFile('readMe.txt','utf8',function(err,data){
//     fs.writeFile('./stuff/writeMe.txt',data);
//   });
// });


// fs.unlink('./stuff/writeMe.txt',function(){
//   fs.rmdir('stuff');
// });
