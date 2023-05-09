function basketballEquipment (input) {
    let incomeTax= Number(input[0]);
    let sneakers= incomeTax * 0.6;
    let equipment = sneakers * 0.8;
    let basketball= equipment * 0.25;
    let accessories = basketball * 0.2; 

    let finalPrice = incomeTax + sneakers + equipment + basketball+ accessories;


    console.log(finalPrice);
}