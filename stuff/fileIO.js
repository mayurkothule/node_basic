var fs =require('fs');



//synchronous way mean its wait to complete this code block

// var readMe=fs.readFileSync('readMe.txt','utf8');
//
// console.log(readMe);
//
// fs.writeFileSync('writeMe',readMe);



//Asynchronous way (advantage is we are not blocking the code)

fs.readFile('readMe.txt','utf8',function(err,data){
  console.log(data);
  fs.writeFile('writeMe.txt',data);
});
console.log('test of Asynchronous,i may get print before file read operation');
