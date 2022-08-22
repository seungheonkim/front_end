//삼각형 넓이 구하기

//함수 선언식
function getTriangleArea(base, height) {
    let triangleArea = base * height / 2;
    return triangleArea
}

console.log(getTriangleArea(2, 5));

//함수 표현식
const getTraingleArea_2 = function (base, height) {
    let triangleArea_2 = base * height / 2;
    return triangleArea_2
}

console.log(getTraingleArea_2(3, 4));

//화살표 함수
const getTriangleArea_3 = (base, height) => {
    let triangleArea_3 = base * height / 2;
    return triangleArea_3
}

console.log(getTriangleArea_3(5, 6));

//본문에 return 문만 존재하는 경우
const getTriangleArea_4 = (base, height) => base * height / 2;

console.log(getTriangleArea_4(5, 6));

//소괄호도 사용 가능!
const getTriangleArea_5 = (base, height) => (base * height / 2)

console.log(getTriangleArea_5(10, 11));