//기본적인 반복문
let sum = 2

for (let n = 2; n <= 4; n++) {
    sum += n;
}
console.log(sum)

//구문 기본적인 반복
for (let n = 0; n < 4; n++) {
    console.log('hello world')
}

//for 문을 이용한 구구단 출력
function multiplier() {
    for (let i = 1; i <= 9; i++) {
        console.log(`---${i}단 ---`)
        for (let j = 1; j <= 9; j++) {
            console.log(`${i} * ${j} = ${i * j}`)
        }
    }
}

console.log(multiplier())