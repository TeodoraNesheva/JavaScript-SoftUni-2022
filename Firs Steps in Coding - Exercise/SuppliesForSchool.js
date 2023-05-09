function suppliesForSchool (input) {
    let packOfPens = Number(input[0]);
    let numbersOfMarkers = Number(input[1]);
    let litersDetergent = Number(input[2]);
    let discount = Number(input[3]);
   
    let priceOfThePens = packOfPens * 5.80;
    let priceOfMarkers = numbersOfMarkers * 7.20;
    let priceOfDetergent = litersDetergent * 1.20;
    

    let priceOfAllMaterials = priceOfThePens + priceOfMarkers + priceOfDetergent;
    let  discountPercentage = discount / 100;

    let  priceWithDiscount = priceOfAllMaterials - (priceOfAllMaterials * discountPercentage);

    console.log(priceWithDiscount);
}
