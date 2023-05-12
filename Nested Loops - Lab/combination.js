function combination(input) {
  let x = Number(input[0]);
  let validCombinationsCount = 0;

  let sum = x1 + x2 + x3;

  if (x === sum) {
      validCombinationsCount++;
  }
  console.log(validCombinationsCount);
}

combinations(["25"]);