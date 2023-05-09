function foodDelivery(input) {
    let chickenMenus=Number(input[0]);
    let fishMenus=Number(input[1]);
    let vegetableMenus=Number(input[2]);


    let totalMenuPrice=(chickenMenus*10.35) + (fishMenus*12.40) + (vegetableMenus*8.15);

    let dessertPrice= totalMenuPrice*0.20;
    let totalPrice=totalMenuPrice+dessertPrice+2.50;

    console.log(totalPrice);
    
}
