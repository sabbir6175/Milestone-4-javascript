// chair = 3 cft
//table = 10 cft
//bad = 50 cft

function woodQuantity(chairQuantity, tableQuantity, badQuantity){
    const chairWood = 3;
    const tableWood = 10;
    const badWood = 50;

    const chairTotalWood = chairQuantity * chairWood;
    const tableTotalWood = tableQuantity * tableWood;
    const badTotalWood = badQuantity * badWood;
    const totalWood = chairTotalWood + tableTotalWood + badTotalWood;

    return totalWood;
}
const wood = woodQuantity(0, 0, 1)
console.log(wood)



// shirt price= 500 taka;
// pant price = 400 taka;
// shoe price= 900 taka
function WoodPrice(shirtQuantity, pantQuantity, shoeQuantity){
    const shirtWood = 500;
    const pantWood = 400;
    const shoeWood = 900;
    const shirtTotalWood = shirtQuantity*shirtWood;
    const pantTotalWood = pantQuantity* pantWood;
    const shoeTotalWood = shoeQuantity*shoeWood;

    const allWood = shirtTotalWood + pantTotalWood + shoeTotalWood;

    return allWood;
}
const price = WoodPrice( 2, 2 , 0)
console.log(price)