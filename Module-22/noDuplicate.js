
const numbers = [ 1, 3, 5, 4, 6, 7, 3, 5, 14]

function noDuplicate(array){
    // console.log(numbers)
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item)
        }
    }
    return unique;
}
const uniqueArray = noDuplicate(numbers)
console.log(uniqueArray)