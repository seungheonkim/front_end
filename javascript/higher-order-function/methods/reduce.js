//reduce
let arr = [1, 2, 3, 4, 5, 6, 7];
let reduceSum = arr.reduce(function (sum, element) {
    sum += element;
    return sum;
}, 0);

console.log(reduceSum);//28