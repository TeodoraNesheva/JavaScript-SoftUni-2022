function cinemaTicket(input) {
  let day = input[0];
  let ticketPrice = 0;

  if (day == "Monday" || day == "Tuesday" || day == "Friday") {
    ticketPrice = 12;
    console.log(ticketPrice);
  } else if (day == "Wednesday" || day == "Thursday") {
    ticketPrice = 14;
    console.log(ticketPrice);
  } else if (day == "Saturday" || day == "Sunday") {
    ticketPrice = 16;
    console.log(ticketPrice);
  }
}

cinemaTicket(["Monday"]);
