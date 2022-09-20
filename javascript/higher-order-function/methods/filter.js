//filter 내장함수
let arr = [1, 2, 3, 4, 5, 6, 7];
let filterOdd = arr.filter(function (element) {
    return element % 2 !== 0;
});
console.log(filterOdd);//[1,3,5,7]