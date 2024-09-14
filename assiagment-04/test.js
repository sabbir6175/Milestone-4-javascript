
// task-01 solving processing

// function calculateTax(income, expenses) {
//     if(income <= 0 || expenses <= 0 || income < expenses){
//         return "Invalid Input";
//     }
//    const sum = income - expenses;
//    const tax = sum * (20/100);
//    return tax; 
// }
// console.log(calculateTax(34000, 1753))
// task-01 solved

//task - 02 solving processing

// function sendNotification(email) {
//     const names = email.split('@');
    
//     if (names.length !== 2) {
//         return "Invalid Email";
//     }
//     const username = names[0];
//     const domain = names[1];
    
//     return username + ' sent you an email from ' + domain;
// }

// console.log(sendNotification('nadim.naem5@outlook.com')); 

// task-02 solved

//task - 03 solving processing

// function checkDigitsInName(name) {
//      if(typeof name !== 'string'){
//         return 'Invalid Input';
//      }
//      for(let character of name){
//         if(character >= '0' && character <= '9'){
//             return true;
//         }
//      }
//      return false;
// }
// console.log(checkDigitsInName(["Raj"]))


// task-03 solved

//task - 04 solving processing

// function calculateFinalScore(obj) {
    
//     if(typeof obj !== 'object' && obj == null){
//         return 'Invalid Input';
//     }
//     const { name, testScore, schoolGrade, isFFamily } = obj;
    
//     if(typeof name !== 'string' && typeof testScore !== 'Number' && typeof schoolGrade !== 'number' && typeof isFFamily !== 'boolean'){
//         return 'Invalid Input'
//     }
//     let parentProfession = 0;
//     if(isFFamily){
//         parentProfession = 20;
//     }
//     const finalScore = testScore + schoolGrade + parentProfession;
//      if(finalScore >= 80){
//         return true;
//      }else{
//         return false;
//      }
// }

// console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  } ))
// task-04 solved

//task - 05 solving processing

// const array = [ 3, 5, 7, 11, 6 ];
// const serialNumber = 10;

// function  waitingTime(waitingTimes  , serialNumber) {
//     if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
//         return 'Invalid Input';
//     }

//     let sum = 0;
//     for(let i = 0; i < waitingTimes.length; i++){
//         sum += waitingTimes[i];
//     }

//     const average = sum / waitingTimes.length;
//     const roundedAverage = Math.round(average);

//     const beforeWaiting = serialNumber - 1;
//     const waiting = beforeWaiting - waitingTimes.length;


//     if (waiting > 0) {
//          waitingTime = waiting * roundedAverage;
//     } else {
//         waitingTime = 0;
//     }
//     return waitingTime; 
// }   

// console.log(waitingTime(7 , 10))




// function  waitingTime(waitingTimes  , serialNumber) {
//     if(!Array.isArray(waitingTimes) || typeof(serialNumber) !== 'number' ){
//         return "Invalid Input";
//     }
//     let sum = 0 ;
//     for(let char of waitingTimes){
//         sum = sum + char ;
//     }
//     let avg = sum / waitingTimes.length;
//     let originalAvg = Math.round(avg);
//     let waitingList = serialNumber - waitingTimes.length -1; 
//     let remainingTime = originalAvg * waitingList;
//     return remainingTime;
// }

