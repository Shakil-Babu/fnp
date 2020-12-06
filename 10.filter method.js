// filter method in js 

var numberList = [3,4,6,7,1,5,44] ;
var oddNumbers = [] ;

// for(var i = 0 ; i<numberList.length ;i++){
//     var ele = numberList[i] ;

//     if(ele%2 === 1){
//         oddNumbers.push(ele) ;
//     }
// }
// oddNumbers;


// numberList.filter((item)=>{
//     if(item%2 === 1){
//         oddNumbers.push(item)
//     }
// })
// oddNumbers;


// Defferent way 

var oddNumberss = numberList.filter((item)=>{
    return item%2 ===  1 ;
})
oddNumberss;


//create a filter method in Js  

var nmberList = [3,4,5,5433,24,432] ;

function filterMethod(arr, callBack){
    var newArr = [] ;

    for(var i = 0 ; i<arr.length ; i++){
        var ele = arr[i] ;

        if(callBack(ele)){
            newArr.push(ele);
        }
    }
    return newArr ;
}

 var result = filterMethod(nmberList, function(ele){

   return ele%2 === 1;
})

result;







