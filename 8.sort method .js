
// // today topic is sort method in js 

// // var list = ['shakil', 'Babu','Torikus','Sadik','Fahim','Faysal','Fahim','Morshed'];

// // list.sort((a,b)=>{
// //     return a.length - b.length ;
    
// // });

// // console.log(list[0]);

// // Find a small number from an array 

// // var numberList = [34,55,77,54,336,55,2] ;

// // numberList.sort((a,b)=>{
// //     return a-b ;
// // })

// // console.log(numberList[0]);

// var memberDetails = [
//     {
//         name: 'Shakil Babu',
//         age: 19
//     },
//     {
//         name: 'Torikus Sadik',
//         age: 21
//     },
//     {
//         name: 'Fahim Morshed',
//         age:20
//     },
//     {
//         name:'Arafat Hossain',
//         age:23
//     }
// ]


// memberDetails.sort((a,b)=>{
    
//     if(a.name > b.name){
//         return 1 ;
//     }else if(a.name < b.name){
//         return -1;
//     }else{
//         return 0 ;
//     }
// })
// console.log(memberDetails);



// sort method is a very easy when we need to some of operation on array we can use sort method . 
// oh yeah , sort method bear two parameter like a, b ;


// sort method er maddhome amra onek kothin kaj khub sohjei korte pari .
// functional programming is very helpful for every developer . 
// so sort is a functional method in js . 



// =============================================How to work sort method=============================================



// var firstIn = 0 ;
// function Mysort(arr, callback){
//     var newArr = [];

//     for(var i =0 ; i<arr.length ;i++){
//         var ele = arr[i] ;
//         if(callback(ele)){
//             newArr.push(ele);
//         }
//     }
//     return newArr ;
// }


// var res = Mysort(list, function (ele) {  
//     return ele > firstIn ; 
// });
// res;
var list = [4,3,5,33,22,6,3,4,6] ;









