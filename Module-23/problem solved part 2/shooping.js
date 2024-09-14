const shooping = [
    {name: 'barger', price: 300, Quantity: 2},
    {name: 'kacci', price: 200, Quantity: 4},
    {name: 'briani', price: 100, Quantity: 3},
    {name: 'rost', price: 500, Quantity: 1},
];

function totalCard(shooping){
    let total = 0;
    for(const product of shooping){
        const totalProductCost = product.price * product.Quantity;
        total = total + totalProductCost;
    }
    return total;
        // console.log(product)
}
const card = totalCard(shooping);
console.log('this is price:', card)