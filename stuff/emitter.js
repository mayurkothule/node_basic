var events=require('events');

var util =require('util');



//code for use of events,which is in build module in node.js

// var myEmitter=new events.EventEmitter();
//
// myEmitter.on('someEvent',function(msg){
//   console.log(msg);
// })
//
// myEmitter.emit('someEvent','the events was emitted');


//code for use of util,which is in build module in node.js


var Person=function(name){
  this.name=name;
}

util.inherits(Person,events.EventEmitter);//using this two inbuild modue we inherited Perso

var james=new Person('james');
var mary=new Person('mary');
var ryu=new Person('ryu');

var people=[james,mary,ryu];

people.forEach(function(person){
  person.on('speak',function(msg){
    console.log(person.name+' said: '+ msg);
  });
});

james.emit('speak','hey dudes');

ryu.emit('speak','I want a curry');
