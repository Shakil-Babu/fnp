// Higherorder Funtion in JS


 function Sample(){
     return function(a,b){
         return 'This two numbers equal is = ' + (a+b) ;
     }
  
 }
 var res = Sample() ;
 var result = res(19,29) ;
 result ;


//another Higher Order Function 
//when we pass a function as a argument
// then we can call that is a higher Order Function 

 var list = [1,2,3,4,5]
 list.forEach((item)=>{
     console.log(item);
 })

 //we create a function into the forEach method 


 // if we would create a function and pass the function as a argument then that look will be like below ==


 var item = [3,4,52,5,7,9] ;

 function Check(a){
     console.log(a)
 }
 item.forEach(Check); 


 // End here ... 