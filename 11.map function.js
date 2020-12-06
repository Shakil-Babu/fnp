// today topic is map 

var numberList = [1,2,3,4,5];

// var a = numberList.map((item)=>{
//     return item * item ;
// })
// a;




// I am gonna to show you how to create a map method in JS


function myMap(arr,callBack) {
    
    var newArray = [];
    for(var i = 0 ; i<arr.length ; i++){
        var ele = arr[i];
        newArray.push(callBack(ele))
        
    }
    return newArray ;
}
var res = myMap(numberList, function(ele) {  
    return ele -2 ;
});
res;



