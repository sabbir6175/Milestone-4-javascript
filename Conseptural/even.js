const numbers = [1,2,4,5,6];
let i = 0;

for(let item of numbers){
    if(item % 2 === 0){
        i = i + item;
    }
}
console.log(i)