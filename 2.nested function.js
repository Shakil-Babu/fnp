// nested funtion or innerFunction

function twoFunctionsSum(){
  

    function FirstFuntion(c,d) {
        
        var sum = c+d ;
        return sum ;
    }
    
    function SecondFunctoin(e,f) {
        var sum = e+f ; 
        return sum ;
    }

    return FirstFuntion(10,10) + SecondFunctoin(20,20) ;
}

console.log(twoFunctionsSum());


// another innerFuntion

function allofGreeting(live){
    function greetingFun (greeting){
        return greeting ;
    }

    function nameFun(name) {
        return name ;
    }

    return greetingFun('Hello, ') + nameFun('Shakil Babu.') + live ;
}
console.log(allofGreeting(' I live in Bangladesh .'));


 function SumNumbers(a,b){
     function sum() {
         return a+b ;
     }
     function sub() {
         return a-b ;
     }
     function mul() {
         return a*b ;
     }
     function div() {
         return a/b ;
     }

     return sum() + sub() + mul()+ div() ;
 }
console.log(SumNumbers(10,10)); 



