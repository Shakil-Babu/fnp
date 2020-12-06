/ Suppose we have to summ all of element from an array 


// manually we will create it using simple path like below

var numbersList = [20,10,293,29] ;

// var i = 0 ;
// sum = 0 ;
// while(i<numbersList.length){
//     var ele = numbersList[i] ;
//     sum+=ele ;
//     i++;
// }
// console.log(sum);


// we can solve this problem using reduce method easily 
// like 


var res = numbersList.reduce((a,b)=>{
    return a+b ;
})

res;
