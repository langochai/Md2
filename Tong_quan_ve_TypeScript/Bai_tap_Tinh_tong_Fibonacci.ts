function fibo(n:number):number {
    if (n <= 1) {
        return n;
    } else {
        return fibo(n - 1) + fibo(n - 2);
    }
}
let n = 5;
for (let i = 1; i <= n; i++) {
    console.log(fibo(i))
}
let sum:number =0;
for (let i = 1; i <= n; i++) {
    sum += fibo(i)
}
console.log([])
console.log(sum)