function solve(input) {
    let n = Number(input[0]);
    input.shift();
    let first = Number(input[0]);
    for (i = 1; i < n; i++) {
       let num = Number(input[i]);
       if (first > num) {
           first = num;
        }
    } 
    console.log(first)
}