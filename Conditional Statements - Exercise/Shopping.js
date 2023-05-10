function shopping(data){
 
    let budget = Number(data[0]);
    let GPUCount = Number(data[1]);
    let CPUCount = Number(data[2]);
    let RAMCount = Number(data[3]);
 
    let GPUPrice = GPUCount * 250;
    let CPUPrice= GPUPrice * 0.35 * CPUCount;
    let RAMPrice = GPUPrice * 0.10 * RAMCount;
 
    let totalPrice = GPUPrice + CPUPrice + RAMPrice; //825
 
    if(GPUCount > CPUCount){
    totalPrice = totalPrice * 0.85;
    }
 
    diff = Math.abs(totalPrice - budget);
 
    if(budget >= totalPrice){
 
        console.log(`You have ${diff.toFixed(2)} leva left!`);
 
    }
    else{
 
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
 
 
}