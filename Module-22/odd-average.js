// function odd average

 function oddAverage(numbers){
        const odds = [];
        for(const number of numbers){
            if(number % 2 === 1){
                // console.log(number)
                odds.push(number);

            }
        }
        // console.log(odd)
        let sum = 0;
        for(const number of odds){
            sum = sum + number;
        }
        const count = odds.length;
        console.log(sum, count);
        const avg = sum / count;
        return avg;

 }
 const numbers = [ 19,23,48,48,39,34,45];
 const avg = oddAverage(numbers);
console.log('average of the odd numbers is: ', avg);