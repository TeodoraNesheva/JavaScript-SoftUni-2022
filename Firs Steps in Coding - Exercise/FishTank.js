function fishTank(input) {
    let length=Number(input[0]);
    let width=Number(input[1]);
    let height=Number(input[2]);
    let takenSpacePercent=Number(input[3]);

    let takenSpaceDecimal=takenSpacePercent/100;
    let tankVolume=length*width*height;

    let tankVolumeLiters=tankVolume*0.001;

    let spaceTaken=takenSpaceDecimal*tankVolumeLiters;
    let spaceLeft=tankVolumeLiters-spaceTaken;

    console.log(spaceLeft);
}