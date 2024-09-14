
//this is the max price of the phone



const phones1 = [
    { names: 'Samsung', price: 20000, camera: '13mp', color:'black'},
    { names: 'xoami', price: 15000, camera: '13mp', color:'black'},
    { names: 'Oppo', price: 40000, camera: '13mp', color:'black'},
    { names: 'Readme', price: 14000, camera: '13mp', color:'black'},
    { names: 'Iphone', price: 150000, camera: '13mp', color:'black'},
    { names: 'Walton', price: 23000, camera: '13mp', color:'black'},
    { names: 'Realme', price: 16000, camera: '13mp', color:'black'},
]


function TotalPhones (phones1){
    let max = phones1[0];
    for(const phone of phones1){
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max;
   
}
const price1 = TotalPhones(phones1)
console.log(price1)

// this is the min price

const phones = [
    { names: 'Samsung', price: 20000, camera: '13mp', color:'black'},
    { names: 'xoami', price: 15000, camera: '13mp', color:'black'},
    { names: 'Oppo', price: 40000, camera: '13mp', color:'black'},
    { names: 'Readme', price: 14000, camera: '13mp', color:'black'},
    { names: 'Iphone', price: 150000, camera: '13mp', color:'black'},
    { names: 'Walton', price: 23000, camera: '13mp', color:'black'},
    { names: 'Realme', price: 16000, camera: '13mp', color:'black'},
]


function TotalPhone (phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
   
}
const price = TotalPhone(phones)
console.log(price)


