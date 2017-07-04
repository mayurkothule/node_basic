var express=require('express');
var bodyParser=require('body-parser');

var app=express();


var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.set('view engine','ejs');

app.use('/assets',express.static('assets'));

app.get('/',function(req,res){
  res.render('index');
});

app.get('/contact',function(req,res){
  console.log(req.query);
  res.render('contact',{qs:req.query});

});

app.post('/contact',urlencodedParser,function(req,res){
  console.log(req.body);
  res.render('contact-success',{data:req.body});
});

app.get('/contact/:id',function(req,res){
  res.send('You reuested contact of id:'+req.params.id);
});

app.get('/profile/:name',function(req,res){

  var data={'age':25,'job':'Ninja','hobbies':['Playing Chess','Swimming','Ridding']};
  res.render('profile',{person:req.params.name,data:data});
});


app.listen(3000);
