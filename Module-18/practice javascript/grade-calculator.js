var student = true;


// a>b = 10>12   ,   a<b = 10<12     
var grade = 99;
if(grade > 90 && grade < 100){
    console.log("Your Grade is A")
}
else if(grade > 80 && grade < 89){
    console.log("Your Grade is B")
}
else if(grade > 70 && grade < 79){
    console.log("Your Grade is C ")
}
else if(grade > 60 && grade < 69 ){
    console.log("Your Grade is D")
}
else if(grade > 0 && grade < 59 ){
    console.log("Your Grade is F")
}
else{
    console.log("Your are not selected")
}