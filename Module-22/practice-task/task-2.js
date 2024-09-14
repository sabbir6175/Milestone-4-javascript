
function countvalue(numbers, value) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === value) {
            count++;
        }
    }
    return count;
}

// Example usage
const numbers = [5, 6, 11, 12, 98, 5];
const valueToFind = 5;
console.log(countvalue(numbers, valueToFind)); // Outputs: 2

const valueToFind2 = 25;
console.log(countvalue(numbers, valueToFind2)); // Outputs: 0
