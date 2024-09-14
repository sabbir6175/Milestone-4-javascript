// 12 inch 1 feet


function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
const sabbirHeight = inchToFeet(75);
console.log(sabbirHeight)




// function inchToFeet1(inch){
//     const feetFraction = inch / 12;
//     const feetNumber = parseInt(feetFraction);
//     const inchRemaining = inch % 12;
//     const result = feetNumber + ' fits ' + inchRemaining + ' inch ';
//     return result;

// }
// const nahidHeight = inchToFeet1(75);
// console.log(nahidHeight)



function inchToFeet4(inch){
    const feetFrac = inch / 12;
    const feetNum = parseInt(feetFrac);
    const feetInch = inch % 12;
    const result2 = feetNum + ' fits ' + feetInch + ' inch ';
    return result2
}
const Height = inchToFeet4(80);
console.log(Height)


function mileToKilo(mile){
    const kilo = mile * 1.60934;
    return kilo
}
const area = mileToKilo(40)
console.log(area)