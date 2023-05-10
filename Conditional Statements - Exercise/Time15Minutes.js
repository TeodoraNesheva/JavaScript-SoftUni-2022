function add15Minutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
 
    let timeInMin = hour * 60 + minutes;
 
    let timePlus15 = timeInMin + 15;
 
    let finalHour = parseInt(timePlus15 / 60);
    let finalMin = timePlus15 % 60;
 
    if (finalHour >= 24) {
        finalHour -= 24;
    }
 
    if (finalMin < 10) {
        console.log(`${finalHour}:0${finalMin}`);
    } else {
        console.log(`${finalHour}:${finalMin}`);
    }
}
