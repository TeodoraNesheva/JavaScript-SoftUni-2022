function sequence([arg1]) {
    let n = Number(arg1);
    let num = 1;

    while (num <= n) {
        console.log(num);
        num = 2 * num + 1;
    }
}