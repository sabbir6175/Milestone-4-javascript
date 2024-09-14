// string Example

// var names = 'Sabbir ';
// console.log(names)



// var first= 'sabbir';
// var last = 'Hasan';
// console.log(first+ '' + last)
// let fullName = first + last;
// console.log(fullName)


// let names = 'Nahid'
// names = 'hasan' //name change Any veriable
// console.log(names)
// console.log(typeof names)


// trim er kaj letter er samne and pichone kono faka jaya thakle seitake remove kore deya
// const str = '   Hello, World!   ';
// const trimmedStr = str.trim();
// console.log(trimmedStr);


//split() funcition er kaj 

// const some = 'My country in the bangladesh';
// const change = some.split(' ',);
// console.log(change);

// const change1 = 'My country in the bangladesh';
// const someChange = some.split(' ', 4);
// console.log(someChange);


// number example

// const x = (2,3,4,5,6,7);
// console.log(typeof x )


// const number = 23;
// console.log(typeof number)




// boolean example

// const student = true;
// console.log(typeof student)


// const student = true;

// if(student){
//     console.log("School a asio kalke class ase")
// }else{
//     console.log("Tumi bari jeo tomake school a aste hobe na ")
// }
// if(!student){
//     console.log("School a asio kalke class ase")
// }else{
//     console.log("Tumi bari jeo tomake school a aste hobe na ")
// }

// isNan() function example
// numbar na ba number hoya possible o na sekhetre isNaN function true return korbe 

// const x = 'sabbir';
// console.log(isNaN(x))

// numbar ba number hoya possible sekhetre isNaN function false return korbe 
//  const y = "12";
//  console.log(isNaN(y))


// var lemon = 30;
// console.log(parseInt(2) * lemon);
// console.log(parseInt('23434'));
// console.log(parseInt('xyz'));
// console.log(parseFloat(2983479.328479).toFixed(1))

// console.log(parseInt('1234')); 


//  Comparison operator ( === ,!== >=, =<, >,<)

// kind of check any type data
// var x ="";
// console.log(!x)


// ternary syntex
// condition? if ture; if false
//  const man = 55;
//  if(man<=40 && man>=15){
//     console.log("she is young");
//  }else if(man<14){
//     console.log('aktu holeo se bujhe');
    
//  }
//  else if(man<5){
//     console.log('she akhono bacca ');
    
//  }
//  else{
//     console.log('otherwise she is a old man');
    
//  }



// condition && and || differents
// let lemon =28;
// let goyava = 24;
// let bannana = 24;
// if(lemon ===goyava && goyava === bannana){
//     console.log("Two part is right");
    
// }
// else{
//     console.log("Two part is not right");  
// }
// let lemon1 =28;
// let goyava1 = 24;
// let bannana1 = 24;
// if(lemon1 ===goyava1 || goyava1 === bannana1){
//     console.log("Two part is right");
    
// }
// else{
//     console.log("Two part is not right");
    
// }




// nested condition syntext and multiple conditiion

// var isRaining = true;
// var haveUmbrella = true;
// if(!!!isRaining === true){
//     if(!haveUmbrella === true){
//         console.log("ami school a jabo");
//     }else{
//         console.log("ami school a jabo na ");
        
//     }
// }else{
//     console.log("ami bristite bisbo");
    
// }

// *************************************
// Array fundamental concept
// **************************************


// const number= [1,3,455,676,87,89];
// number[2] = 33;
// console.log(number.includes(3));
// console.log(number.indexOf( 87));
// console.log(number);



// const names = ['yellow', 'umbrella', 'guava', 'orange'];
// console.log(names.includes('yellow'))
// console.log(names);

// Array upadan add 2 function push() and unshift()
// const names = ['yellow', 'umbrella', 'guava', 'orange'];
// console.log(names.push('Apple'))
// console.log(names.unshift('buscuit'))
// console.log(names);


// Array upadan remove 2 function pop() and shift
// const fruits = ['yellow', 'umbrella', 'guava', 'orange'];
// console.log(fruits.push('Apple'))// last an element add
// console.log(fruits)
// console.log(fruits.pop('Apple')) //last an element remove 
// console.log(fruits.shift('buscuit')) //first an element remove
// console.log(fruits);





// ******************************************
//                  for loop
// ******************************************


// const number = [37,58,68,69];
// for(const num of number){
//     console.log(num)
// }
// loop reverse
// const number = [37,58,68,69];
// for(const num of number.reverse()){
//     console.log(num)
// }

// for(let i =0; i<20; i++){
//     console.log(i)
// }


//for loop break and continue Example     

// for(let i=0; i<150; i++){
//     console.log(i);
//     if(i>=5){
//         break
//     }
    
// }


// for(let i = 0; i<10; i++){
//     if(i%2 ===0){
//         continue
//     }
//     console.log(i);
    
// }

// ****************************
//      While loop
// ****************************
// let count = 1;
// while(count<5){
//     console.log(count);
//     count ++;
    
// }
//while loop break and continue Example     
// most an Importaine topic don't understand me
// let n= 40;
// while(n>25){
//     if(n<50){
//         break;
//     }
//     console.log(n)
//     n--;
// }

