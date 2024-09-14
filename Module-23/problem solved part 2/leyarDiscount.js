    function leyarDiscount(discount){
        const first100Price = 100;
        const second200Price = 90;
        const above200Price = 70;


        if(discount <= 100){
            const total = discount * first100Price;
            return total
        }
        else if(discount <= 200){
            const first100Total = 100 * first100Price
            const remainingDiscount = discount - 100;
            const remainingTotal = remainingDiscount *second200Price
            const total = first100Total + remainingTotal;
            return total
        }
        else{
            const first100Total = 100 * first100Price;
            const second200Total = 100 * second200Price;
            const remainingDiscount = discount - 200;
            const remainingTotal = remainingDiscount * above200Price;
            const total = first100Total + second200Total + remainingTotal;
            return total
        }

    }
  const total = leyarDiscount(210)
  console.log(total)
