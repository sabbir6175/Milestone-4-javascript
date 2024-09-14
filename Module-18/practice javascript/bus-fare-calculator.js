var age = 50;
var taka = 800;
var student = true;
if(age < 10){
    console.log("Your ticket full free")
}
else if(!student){
    // 50% discount
    console.log(taka * 50 / 100)
}
else if(age >= 60 ){
    // 15% discount
    console.log(taka * 15 / 100)
}
else{
    console.log(taka)
}