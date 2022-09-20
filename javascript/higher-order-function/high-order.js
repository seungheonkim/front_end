//1. 다른 함수를 인자로 받는 경우
function double(num) {
    return num * 2;
}

//함수 doubleNum 은 func 을 콜백함수로 하는 고차함수
function doubleNum(func, num) {
    return func(num);
}

let output = doubleNum(double, 4);
console.log(output);//8

//함수를 리턴하는 경우
//함수 adder 는 num 을 파라미터로 받는 익명 함수를 콜백함수로 가지는 고차함수
function adder(added) {
    return function (num) {
        return num + added;
    }
}

let result = adder(5)(3);
console.log(result); // 5 + 3 = 8

const add3 = adder(3);
result3 = add3(2);
console.log(result3);//3 + 2 = 5

//함수를 인자로 받고, 함수를 리턴하는 경우
function doubling(num) {
    return num * 2;
}

function doubleAdder(added, func) {
    const doubled = func(added);
    return function (num) {
        return num + doubled;
    }
}

doubleAdder(5, doubling)(3);
//doubled = doubling(5) = 10;
//결과 : 10 + 3 = 13;

const addTwice3 = doubleAdder(3, doubling);
addTwice3(2);//(3 * 2) + 2 = 8