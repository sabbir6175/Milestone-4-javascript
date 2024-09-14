const products=[
    {name: 'shampoo', price: 200},
    {name: 'Paste', price: 300},
    {name: 'Paste', price: 150}
]

function totalPrice(products){
    let total =0;
    for(const product of products){
        total = total + product.price;
       
    }
    return total;
}
const total= totalPrice(products);
console.log('Total price :', total)