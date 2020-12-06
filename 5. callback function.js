// //Callback Function in JS 

// function Greeting(name){
//     print(name) ;
// }

// function print(name) {
//     console.log(name);
// }
// print('Hi') ;
// print('Shakil Babu'); 



// // Second 

// function Dom(name,print){
//     print(name)  ;
// }

// Dom('Shakil', function (name) {
//     console.log('Hello'+ name);
// })

// Dom('Shakil', function(name){
//     console.log('Hi ', name);
// })

// Dom('Developer', function (name){
//     console.log('Hello Java', name);
// })
// Dom('Designer', function(name){
//     console.log('Hi!, Are You Passionate ', name , '?' );
// })

// third 

var PersonDetails = { 
    name: 'Shakil Babu',
    age: 17 , 
    email:'shakilbabu303@gmail.com'
}

function Person(person, returnResult){
    var age = person.age ;

    if(age > 18 ){
        returnResult(person.email) ;
    }else{
        console.log('Sorry you are too tiney .');
    }
}

Person(PersonDetails, function(email){
    console.log('Your email has been sent to ',email)
})

// var PersonDetails = {
//     name: 'Shakil Babu',
//     email:'shakilbabu303@gmail.com',
//     age: 40
// }

// function CheckDetails(person, isTrue , iselseTrue, notTrue){

//     var age= PersonDetails.age ;

//     if(age <= 18 ){
//         isTrue(person);
//     }else if(age <= 30 ){
//         iselseTrue(person);
//     }else{
//         notTrue(person);
//     }
// }

// CheckDetails('Shakil Babu', function(person){
//     console.log('Hey',person + ' You are a Baby . ');
// }, function(person){
//     console.log('Hey', person + ' You are a Adult .');
// }, function (person){
//     console.log('Hey', person, ' You are going to be old man.');
// })



function Print(data, dataUppercase, dataLowercase){
    console.log('Original Data : ' + data);
    dataUppercase(data) ;
    dataLowercase(data) ;
}
Print('My name is Shakil Babu from Bogura .', function(data){
    var data = data.toUpperCase();
    data;
}, function(data){
    var data = data.toLowerCase();
    data; 
})


// var list = [1,2,4,53,644,64,63,55,44] ;

// function findoddeven(numbers, Odd , Evan) {
    

//     for(var i = 0 ; i<numbers.length ; i++){

//         var ele = numbers[i];
//         if(ele%2 === 1){
//             Odd(ele);
//         }else{
//             Evan(ele);
//         }
//     }
// }

// findoddeven(list , function (number) {
//     console.log("ODD Numbers is : ",number);
// }, function (number) {
//     console.log("Even Numbers is : ",number)
});





















