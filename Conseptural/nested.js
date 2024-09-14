

// for( let i=0; i>=5; i++) {
//     console.log("Hello form i ", i )
//    for( let j=0; j>=5; j++){
//     console.log("Hello form j ", j )
//    }
// }

const x = [1,2,3,4,5,6,7,8];

for(let i = 0; i<x.length; i++){
    // if(x[i] === 4){
    //     break;
    // }
    if(x[i] === 6){
        continue;
    }
    console.log(x[i])
}
    