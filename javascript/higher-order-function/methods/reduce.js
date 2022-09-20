//reduce
let arr = [1, 2, 3, 4, 5, 6, 7];
let reduceSum = arr.reduce((acc, cur) => acc + cur, 0);

console.log(reduceSum);//28

//중첩 배열 평탄화 하기
const doubledArr = [1, 2, [3, 4], [5, 6]];
const flatten = doubledArr.reduce((acc, cur) => acc.concat(cur), []);
console.log(flatten);//[1,2,3,4,5,6]

//flat 사용하기
const useFlat = doubledArr.flat();
console.log(useFlat);