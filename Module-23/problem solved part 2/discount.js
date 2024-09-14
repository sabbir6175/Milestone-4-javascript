function discountPrice(discount){
    if(discount <= 100){
        const total = discount * 100;
        return total;
    }
    else if( discount <= 200){
        const total = discount * 90
        return total
    }
    else{
        const total = discount *70;
        return total
    }
}
const total = discountPrice(201)
console.log(total)