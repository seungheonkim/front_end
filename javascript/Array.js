let myArr = [1, 2, 3, 4, 5];

//console.table()로 표형식으로 확인하기
console.table(myArr);

//인덱스 값으로 배열원소 검색하기
console.log('3rd index : ', myArr[3]);

//인덱스 값으로 해당 인덱스 위치한 원소 바꾸기
myArr[3] = 200;
console.log('3rd index changed !! -> ', myArr[3]);

//해당 값이 배열인지 유무를 판별하기
console.log(Array.isArray(myArr));
console.log(Array.isArray('hello'));

//배열에 원소 추가하기
myArr.push(10);
console.log('add complete! -> ', myArr);

//배열 맨 앞에 원소를 추가하기
myArr.unshift(0);
console.log('add 0th index : ', myArr);

//배열의 길이 반환하기
console.log('array length : ', myArr.length);

//배열의 마지막 값 삭제하기
myArr.pop();
console.log('after pop, : ', myArr);

//배열의 0번째 인덱스 값 삭제하기
myArr.shift();
console.log('after shift : ', myArr);

//배열원소 하나씩 방문하여 출력하기
for (let i = 0; i < myArr.length; i++) {
    console.log(i, '번째 요소는 ', myArr[i], '입니다');

    if (i === (myArr.length - 1)) console.log(i + '번째가 해당 배열의 마지막 인덱스입니다');
}

// 배열의 모든 원소를 누적해서 더하여 sum 변수에 저장 후 출력하기
let sum = 0;

for (let i = 0; i < myArr.length; i++) {
    sum += myArr[i];
}

console.log('sum : ', sum);

//특정 값의 인덱스 값 반환하기
console.log(myArr.indexOf(200));

//특정 값이 포함되어있는지 유무를 true, false 로 판별
console.log(myArr.includes(200));
console.log(myArr.includes(1000));

