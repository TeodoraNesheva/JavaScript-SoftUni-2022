function depositCalculator(input){
    let depositedSum = Number(input[0]);
    let depositePeriodMonths=Number(input[1]);
    let yearlyIncreasePercent=Number(input[2]);

    let yearlyIncreaseDecimal=yearlyIncreasePercent / 100;
    let sum = depositedSum + depositePeriodMonths *((depositedSum*yearlyIncreaseDecimal)/12);
    console.log(sum);
}