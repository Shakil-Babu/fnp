 //Again return function 
 
 function Tricky(data){

    return function (name) {  
        console.log(data, 'Hey', name);
       
    }
 }

 var Shakil = Tricky('Name: ')('Shakil Babu');
 var Torikus = Tricky('Name: ')('Torikus Sadik');
 var Fahim  = Tricky('Name: ')('Fahim Morshed');


 // again closure concept 

 function Increase(){
     var nm = 0 ;
     
     return function () { 
      nm++;
      return nm ;
      }
 }

 var first = Increase();
 console.log(first());
 console.log(first());
 console.log(first());
 console.log(first());
 console.log(first());

 var second = Increase();
 console.log(second());
 console.log(second());
 console.log(second());
 console.log(second());
 console.log(second());

