function toyShop(input) {
 
    let tripPrice = Number(input[0]); 
    let jigsaws = Number(input[1]); 
    let dolls = Number(input[2]); 
    let bears = Number(input[3]); 
    let minions = Number(input[4]); 
    let trucks = Number(input[5]); 
 
    let profit = jigsaws*2.6 + dolls*3 + bears*4.1 + minions*8.2 + trucks*2;
    let totalNumber = jigsaws+dolls+bears+minions+trucks;
 
    if (totalNumber>=50) {
        afterDiscount = profit - (profit*0.25);
    }
    else {
        afterDiscount = profit;
    }
    
    let rent = afterDiscount*0.1;
    let endPrice = afterDiscount - rent;
 
    if (endPrice>=tripPrice) {
        console.log ("Yes! " + (endPrice-tripPrice).toFixed(2) + " lv left.");
    } else {
        console.log ("Not enough money! " + (-(endPrice-tripPrice)).toFixed(2) + " lv needed.");
    }
 }
