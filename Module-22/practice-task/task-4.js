// Generate a random number between 10 to 20;


function randomTwoNumber(min, max){
    let number = min;
    for(let i = 0; i<1; i++){
        number = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return number;
}
console.log(randomTwoNumber(10, 20));




/*********************************
  optional section
**********************************/ 

// function getRandomNumber(min, max) {
//     // Generate a random number between 0 (inclusive) and 1 (exclusive)
//     // Scale it to the desired range and round it to an integer
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Example usage
// const randomNumber = getRandomNumber(10, 20);
// console.log(randomNumber); // Outputs a random number between 10 and 20, inclusive
