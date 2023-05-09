function compulsoryList(input) {
    let currBookPages=Number(input[0]);
    let pagesOneHours=Number(input[1]);
    let daysCount=Number(input[2]);
  
    let totalHours=currBookPages/pagesOneHours;
    let hoursPerDay= totalHours/daysCount;
    console.log(hoursPerDay);
  }
  