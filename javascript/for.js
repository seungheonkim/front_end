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

//소수 판별 by 제곱근
function isPrime(num) {
    let sqrt = parseInt(Math.sqrt(num));

    //1. 만약 num 이 1이면, 소수가 아니다.
    if (num === 1) {
        return false;
    }

    //2. 짝수는 2를 제외하고는 소수가 아니다
    if (num === 2) {
        return true;
    }

    if (num % 2 === 0) {
        return false;
    }

    //3. num 보다 작은 수 중에 num을 나눠서 떨어지는 수가 하나라도 있으면, 소수가 아니다
    //num = 36 -> 1,2,3,4,6,9,12,18,36
    //1 * 36, 2 * 18, 3 * 12, 4 * 9, 6 * 6, ... 36 * 1
    // 6 * 6 을 기준으로 양쪽이 대칭임
    // 따라서 6 이전에서 이미 약수가 나왔다면 이미 그 수는 소수가 아니게 된다
    // 즉, 끝까지 num 까지 하는게 아니고 num의 제곱근 까지(반절)만 계산해주면 됨!!
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}
