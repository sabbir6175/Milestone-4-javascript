const age = 157;
// if(age >= 18){
//     console.log("vot dio");
// }
// else{
//     console.log("ghumay thako")
// }


//simple ternary
// age >=18 ? console.log("vot dio") : console.log("ghumay thako");




let price = 400;
const isLeader = true;

if(isLeader === true){
    price = 0;
}
else{
    price = price + 100;
}
// console.log(price)

// short cart option
price = isLeader === true ? 0 : price + 100;