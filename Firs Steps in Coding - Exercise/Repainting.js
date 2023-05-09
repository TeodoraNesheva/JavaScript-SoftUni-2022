function repainting(arr) {
    let naylon = (Number(arr[0]) + 2) * 1.5;
    let paint = Number(arr[1]) * 1.1 * 14.5;
    let thinner = Number(arr[2]) * 5;
    let bag = 0.4;
    let workingTime = Number(arr[3]);
    let totalMaterials = naylon + paint + thinner + bag;
    let workman = totalMaterials * 0.3 * workingTime;
    let total = totalMaterials + workman;
  
    console.log(total);
  }
  