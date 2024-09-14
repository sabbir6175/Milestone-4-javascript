// function vowels(word){
//       word = word.toUpperCase();
//       const vowels = 'AEIOU';  
//       let vowelCount = 0;
//       for (let char of word) {
//         if (vowels.includes(char)) {
//           vowelCount++;
//         }
//       }
//       return vowelCount;

// }
// console.log(vowels("EXAMPLE"));



function vowels(name){
    name = name.toLowerCase();
    let vowelsCont = 0;
    const vowels = 'aeiou'; 
    for(let char of name){
        if(vowels.includes(char)){
            vowelsCont++;
        }
    }
    return vowelsCont;
}
const name1 = vowels("nahid")
console.log(name1);