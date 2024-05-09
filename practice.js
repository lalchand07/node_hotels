
// function add(a,b){
//     return a+b;
// }

//var add = function(a,b){
//     return a+b;
// }

// var add = (a,b) => {return a+b};
// var add = (a,b) => a+b;


// var result = add(78,24);
// console.log(result);

// (function(){
//     console.log("Lal Chand added");
// })();

// function callback(){
//     console.log("Callback function is called...");
// }

// const myFunction = function(a,b,fun){
//     console.log("Sum: "+ a+b);
//     fun();
// }


// const myFunction = function(a,b,fun){
//     const resutl = a+b;
//     console.log("Sum: "+resutl );
//     fun();
// }

// myFunction(5,47, function(){
//     console.log("Callback function is called...");
// });

// myFunction(5,47, () => console.log("Callback function is called"));

// var fs = require('fs')
// var os = require('os')
// var notes = require('./notes')
// var user = os.userInfo();

// console.log(user);

// fs.appendFile("greetings.txt", "Hi " + user.username + "!\n", ()=>{
//     console.log("Fill is created successfully");
// })
// var age = notes.age;

// console.log(age,notes.notename)


// var _ = require('lodash');

// var data = ['person',1,2,2,1,3,5,'name','person','age','name'];

// var filter = _.uniq(data);

// console.log(_.now()); 


// var jsonData = '{"name" : "John Doe","age" : 30,"email" : "abc@gmail.com"}';

// var jsObject = JSON.parse(jsonData);

// console.log(jsObject);


function getData(a,...rest){}
function getData2(a,b,c,d){}

console.log(getData2.length);