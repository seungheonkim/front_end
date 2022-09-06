//기존 함수
const adder1 = (x, y) => x + y;

console.log(adder1(3, 5));//8

//클로저를 통한 함수
const adder2 = x => y => x + y;

console.log(adder2(4)(8));//12

const adder3 = function (x) {
    return function (y) {
        return x + y;
    }
}

console.log(adder3(10)(20));//30

const add5 = adder3(5);
console.log(add5(7));//12
console.log(add5(20));//25

//HTML 문자열 생성기
const tagMaker = tag => content => `<${tag}>${content}</${tag}>`;

const divMaker = tagMaker('div');
console.log(divMaker('hello'));
console.log(divMaker('codestates'));

const anchorMaker = tagMaker('a');
console.log(anchorMaker('go'));
console.log(anchorMaker('urclass'));

//closure module 패턴
const makeCounter = () => {
    let value = 0;

    return {
        increase: () => {
            value += 1
        },
        decrease: () => {
            value -= 1
        },
        getValue: () => value
    }
}

const counter1 = makeCounter();
console.log(counter1);
counter1.increase();//1
counter1.increase();//2
counter1.decrease();//1
console.log(counter1.getValue());//1

const counter2 = makeCounter();
counter2.decrease();//-1
counter2.decrease();//-2
counter2.decrease();//-3
console.log(counter2.getValue());//-3

// let x = 30;
//
// function get(x) {
//     return x;
// }
//
// function set(value) {
//     x = value;
// }
//
// set(10);
// let result = get(20);
// console.log(result);

// let x = 10;
//
// function add (y) {
//     return x + y;
// }
//
// function strangeAdd (x) {
//     return add(x) + add(x);
// }
//
// let result = strangeAdd(5);
// console.log(result);

// let x = 10;
//
// function outer () {
//     let x = 20;
//     function inner () {
//         return x;
//     }
//
//     return inner();
// }
//
// let result = outer();

// let x = 10;
//
// function outer () {
//     let x = 20;
//
//     function inner () {
//         x = x + 10;
//         return x;
//     }
//     inner();
// }
//
// outer();
// let result = x;

let x = 10;

function outer () {
    x = 20;

    function inner () {
        let x
        x = x + 20;
        return x;
    }
    inner();
}

outer();
let result = x;
console.log(result);