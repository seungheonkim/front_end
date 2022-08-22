//사각형 넓이 구하기

//1. 함수 선언식
function getSquareArea_1(base, height) {
    let squareArea_1 = base * height;
    return squareArea_1;
}

console.log(getSquareArea_1(2, 3));//6

//2.함수 표현식
const getSquareArea_2 = function (base, height) {
    let squareArea_2 = base * height;
    return squareArea_2;
}

console.log(getSquareArea_2(4, 5));//20

//3. 화살표 형식
const getSquareArea_3 = (base, height) => {
    let squareArea_3 = base * height;
    return squareArea_3;
}

console.log(getSquareArea_3(6, 7));//42

//화살표 형식 중 본문에 return 구문만 존재하는 경우
const getSquareArea_4 = (base, height) => base * height;

console.log(getSquareArea_4(10, 11));//110

//return 구문을 소괄호 () 로 감싸는 것도 가능
const getSquareArea_5 = (base, height) => (base * height);

console.log(getSquareArea_5(10, 12));//120