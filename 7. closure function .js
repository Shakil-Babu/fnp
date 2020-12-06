//Closure Function In Js

// function Increase(){
//     let count = 0  ;

//     return function(){
//         count ++ ;
//         return count ;
//     }
// }
// var res = Increase();
// console.log(res());


var name = 'Shakil Babu' ;

function sayName(msg){
    console.log(msg + name);
}
sayName('Hello ');


// When we asign some of global value or argument or something like that in current scope . that is closure  . 

// J scope ba function onno kono function ba j kono jaiga theke global value ba onno kichu niye kaj kore tokhoni closure ghote . that's it . 
