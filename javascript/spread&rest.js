//spread
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

//rest
function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}

console.log(sum(1, 2, 3));//6
console.log(sum(1, 2, 3, 4));//10

//배열 합치기
let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics);

//배열 내부의 요소들 활용하기
let arrMax = [10, 30, 40, 20]
let value = Math.max(...arrMax)
console.log(value);

//배열 복사하기
let arr = [1, 2, 3];
let arr2 = [...arr];
arr2.push(4);
console.log(arr2);//[1,2,3,4]
console.log(arr);//[1,2,3]

//객체에서 사용하기
let obj1 = {foo: 'bar', x: 42};
let obj2 = {foo: 'baz', y: 13};

let cloneObj = {...obj1};
let mergedObj = {...obj1, ...obj2};
console.log(cloneObj);
console.log(mergedObj);

//함수에서 나머지 파라미터 받아오기
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");