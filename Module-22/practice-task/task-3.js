function vowels(name){
    name = name.toLowerCase();
     const vowels = 'aeiou'; 
    let vowelsCont = 0;
   
    for(let i = 0; i < name.length; i++){
        let char = name[i];
        if(vowels.includes(char)){
                vowelsCont++;
        }
    
    }
    return vowelsCont;
}
// const name1 = vowels("nahid")
console.log(vowels('Hello world'));
console.log(vowels('Sabbir Hasan'));
