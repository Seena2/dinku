// We can solve large problems either with iteration or recursion

//1:solving x**n with iteration
/*
function exponent(x,n){
    let result=1;
    for(i=0;i<n;i++){
        result=result*x;
    }
    return result
}
let y=exponent(2,3);
console.log(y);
*/
//2-Recursive thinking: simplify the task and call self:
/*
function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
alert(pow(2,5));
*/
/*
function countDown(n){
    for(let i=n;i>0;i--){
        console.log(i)
    }
    console.log("done");
}
*/
//convert the above code to recursive
/*
function countDown(n){
    if(n<=0){
        console.log("Done !");
        return
    }else{
        console.log(n);
        countDown(n-1);
    }
}
countDown(10);
*/
//Exercise 1
/*
function sumRange(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

const answer = sumRange(3);
console.log(answer);

//conver to Recursive
function sumRangeRecurs(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sumRangeRecurs(n - 1)
    }

}
const answerRecursive = sumRangeRecurs(6);
console.log(answerRecursive);
*/
//2-Power Function
/*
function power(b,e){
    if(e==1){
        return b;
    }else{
        return b*power(b,e-1);
    }
}

const result=power(2,4);
console.log(result);
*/
//3-Factorial excersice
function factorial(n){
    if(n==1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
const fact=factorial(5);
console.log(fact);