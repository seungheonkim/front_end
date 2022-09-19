//deep copy
//1. JSON.parse() && JSON.stringify()

const obj = {
    a: "a",
    number: {
        one: 1,
        two: 2,
    },
    arr: [1, 2, [3, 4]],
};

const copyJson = JSON.parse(JSON.stringify(obj));

copyJson.number.one = 10;
copyJson.arr[2].push(99);

console.log(obj === copyJson);//false
console.log(obj.number.one === copyJson.number.one); //1 !== 10 => false
console.log(obj.arr[2] === copyJson.arr[2])//false

console.log(obj);//{ a: 'a', number: { one: 1, two: 2 }, arr: [ 1, 2, [ 3, 4 ] ] }
console.log(copyJson);//{ a: 'a', number: { one: 10, two: 2 }, arr: [ 1, 2, [ 3, 4, 99 ] ] }

//2. 재귀함수를 통한 복사
const object = {a: "a", number: {one: 1, two: 2,}, arr: [1, 2, [3, 4]],};

function deepCopy(object) {
    if (object === null || typeof object !== "object") {
        return object;
    }

    // 객체인지 배열인지 판단
    const copy = Array.isArray(object) ? [] : {};

    for (let key of Object.keys(object)) {
        copy[key] = deepCopy(object[key]);
    }

    return copy;
}

const copy = deepCopy(object);

copy.number.one = 3;
copy.arr[2].push(5);

console.log(object === copy); // false
console.log(object.number.one === copy.number.one);// false

console.log(object.arr === copy.arr); // false
console.log(object);
// { a: 'a', number: { one: 1, two: 2 }, arr: [ 1, 2, [ 3, 4 ] ] }
console.log(copy);
// { a: 'a', number: { one: 3, two: 2 }, arr: [ 1, 2, [ 3, 4, 5 ] ] }

//3. lodash 라이브러리 사용
const org = {a: "a", number: {one: 1, two: 2,}, arr: [1, 2, [3, 4]],};

const cloneDeep = require('lodash.clonedeep');
const lodashCopy = cloneDeep(org);

lodashCopy.number.one = 3;
lodashCopy.arr[2].push(8);

console.log(org === lodashCopy);//false
console.log(org.number.one === lodashCopy.number.one);//1 !== 3 => false
console.log(org.arr[2] === lodashCopy.arr[2]); // false