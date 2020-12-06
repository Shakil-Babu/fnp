// // forEach method in JS 


// var arr = [2,4,5,6,'Shakil','Torikus'] ;

// arr.forEach((item)=>{
//     var ele = item ;
// })


// // forEach funtion working like below code 
// function forEachh(a, clBack){
    
//     for(var i = 0 ; i<a.length ; i++){
//         var el= a[i];
        
//         clBack(el);
//     }
// }

// forEachh(arr, function(el){
//     console.log('Item is : ' + el);
// });


// find a small element from an array 

// var friendsList  = ['shakil','torikus','moota','morshed','arafat','Pa'] ;
// var firstIndex = friendsList[0] ;
// var lengthFirstIndex = firstIndex.length ;
// friendsList.forEach((item)=>{
//     var element = item ;

//     if(lengthFirstIndex > element.length){
//         firstIndex = element ;
        
//     };
// });
// firstIndex;

// use sort method and solve this problem easily 

// var friendsList  = ['shakil','torikus','moota','morshed','arafat','babu'] ;

// friendsList.sort((a,b)=>{
//     return a.length - b.length ;
// })
// console.log(friendsList[0]);


// find a small number from an array 
// var numberList = [3,4,6,7,1,5,44] ;
// var smallNumber = numberList[0] ;

// numberList.forEach(item =>{

//     if(smallNumber > item){
//         smallNumber = item ;
//     }
// })
// smallNumber;

// use rest parapeter 
// var numberList = [3,4,6,7,1,5,44] ;
// var res = Math.min(...numberList);
// res;

