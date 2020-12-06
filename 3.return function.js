

// today topic is retrun function 

// why we need to use retrun method in functional ? 

function CheckAge(name, age){

    let output ; 

    if(age <= 18){
        output = `Hey ${name} , You are a Baby right now .` ;
    }else if(age <= 30){
        output =`Hey ${name} , You are a adult guy right now ` ;
    }else{
        output = `Hey ${name} , You  are a old guy right now . ` ;
    }

    return output ;
}
var res = CheckAge('Shakl',22);
res ;



//Try to find another example 

function genderFinder(name, gender){
    let res ;

    if(gender === 'male'){
        res = `Hey ${name} You are a Boy .` ;
    }else if(gender === 'female'){
        res = `Hey ${name} You are a girl .` ;
    }
    
    else{
        res  = `Hey ${name} You are a other . ` ;
    }

    return res ;
}

var output = genderFinder('Shakil', 'male');
output ;