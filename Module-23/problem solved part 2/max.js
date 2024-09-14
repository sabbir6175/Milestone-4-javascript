const height = [10,39,48,58,59,93,48];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    } 
    return max;
}
const max = getMax(height)
console.log('The max number:',max)



const width  = [21,48,58,39,95,83,58,48];

function getMin(number){
    let min = number[0];
    for(const chart of number){
        // console.log(numbr);
        if(chart < min){
            min = chart;
        }
    }
    return min;
}
const min = getMin(width)
console.log('The min number:',min)