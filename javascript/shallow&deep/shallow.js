//shallow copy

//1. assign()
const obj = {
    a: 1,
    b: {
        c: 2,
    },
};

const copiedObj = Object.assign({}, obj);

copiedObj.b.c = 10;

console.log(obj === copiedObj); // false
console.log(obj.a === copiedObj.a); // true
console.log(obj.b.c === copiedObj.b.c) // true

//2.slice()

//2-1. 1차원 배열에서의 slice
const original = ['a', 2, true, 4, "hi"];
const copyBySlice = original.slice();

copyBySlice.push(10);

console.log(original); // ['a',2,true,4,"hi"]
console.log(copyBySlice); // ['a',2,true,4,"hi", 10]
console.log(original === copyBySlice); // false

//2-2. 중첩배열에서의 slice
const doubleOriginal = [
    {
        a: 1,
        b: 2,
    },
    true,
];

const copiedDouble = doubleOriginal.slice();

console.log(doubleOriginal === copiedDouble);//false

copiedDouble[0].a = 100;
copiedDouble[1] = false;

console.log(doubleOriginal);//[ { a: 100, b: 2 }, true ]
console.log(copiedDouble);//[ { a: 100, b: 2 }, false ]

//3.spread
const OriginalObj = {
    a: 'a',
    number: {
        one: 1,
        two: 2,
    },
};

const spreadCopy = {...OriginalObj};

spreadCopy.number.one = 10;

console.log(OriginalObj === spreadCopy); // false
console.log(OriginalObj.number.a === spreadCopy.number.a); // true, 10