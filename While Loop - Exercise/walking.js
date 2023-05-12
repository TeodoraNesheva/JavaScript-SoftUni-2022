function walking(input){
    let daySteps = input.shift();
    let totalSteps =0;
    let command = input.shift();
   
    while (totalSteps >= 10000){
        totalSteps += daySteps;
        daySteps++;
        break;
    }
    console.log("Goal reached! Good job!");
   
    if (command === "Going home"){
        let finalSteps = Number(input.shift());
        totalSteps += finalSteps;
        daySteps++;
   
        let finalResult = 10000 - totalSteps;
    console.log(`${finalResult} more steps to reach goal.`)
    }
    
  }
  