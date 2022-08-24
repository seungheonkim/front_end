console.log(!undefined);//undefined 를 false 로 취급!(falsy)
console.log(!'Hello');//string type은 true 로 취급!(truthy)

//숫자의 비교
let age = 20;
console.log(age < 25);//true
console.log(age < 10);//false

//문자열의 비교
console.log('Hello' === 'world');//false
console.log('Hello' !== 'hello');//true(대소문자 달라도!!)

//숫자와 문자열의 비교
let hundred = '100';
let num = 100;
console.log(hundred === num);//false

//AND 연산자 &&
let isStudent = true;
let isFemale = true;

console.log(isStudent && isFemale);//true
console.log(isStudent && !isFemale);//false
console.log(!isStudent && isFemale);//false
console.log(!isStudent && !isFemale);//false

//OR 연산자 ||

console.log(isStudent || isFemale);//true
console.log(isStudent || !isFemale);//true
console.log(!isStudent || isFemale);//true
console.log(!isStudent || !isFemale);//false

//NOT 연산자 !

console.log(!false);//true
console.log(!isStudent);//false
console.log(!isFemale);//false

//!! 와 같이 두개 이상 중첩도 가능

console.log(!!isStudent)//true
console.log(!!!isFemale)//false

let str = 'hello';
str = str.slice(1, 4);
console.log(str);