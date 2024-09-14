// var bmiWeight = 17;
// var bmiHeight = (24.9)/2;
// // var bmi = bmiWeight / bmiHeight;
// if(bmiWeight < 18.5){
//     console.log("you are underweight");
// }
// else if(bmiWeight >= 18.5 && bmiHeight <= 24.9){
//     console.log("you area normal");
// }
// else if( bmiWeight >= 25 && bmiHeight <= 29.9 ){
//     console.log("your are overweight");
// }
// else{
//     console.log("you are obese");
// }





// Function to calculate BMI and determine health status

    // Get weight and height from user input
    const weight = 50;
    const height = 40;

    // Check if inputs are valid numbers
    // if (isNaN(weight) || isNaN(height) || height <= 0) {
    //     console.log("Invalid input. Please enter valid numbers for weight and height.");
    //     return;
    // }

    // Calculate BMI
    const bmi = weight / (height * height);

    // Determine health status based on BMI
    if (bmi < 18.5) {
        console.log("You are underweight.");
    }
     else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("Your weight is normal.");
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        console.log("You are overweight.");
    } else {
        console.log("You are obese.");
    }


// Call the function
calculateBMI();