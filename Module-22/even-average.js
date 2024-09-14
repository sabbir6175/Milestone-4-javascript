// even agerage


function evenAverage(numbers){
    const event = [];
    for(const number of numbers){
        if(number % 2 ===0){
            // console.log(number)
            event.push(number);
        }
    }
    // console.log(event)
    let sum = 0;
    for(const number of event){
        sum = sum + number;
    }
    const count = event.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;

}
const numbers = [ 10,3,43,48,50,38,47];
const avg = evenAverage(numbers)
console.log('Average of the even number is : ', avg)







