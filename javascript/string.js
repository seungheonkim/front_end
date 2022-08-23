var str = 'hello from the other side';
console.log(str.split(' '));

var sta = 'ABCDEFGHIJ';
console.log(sta.substring(0,3));
console.log(sta.substring(3, 0));
console.log(sta.substring(-1, 4)); // 음수는 0으로 취급
console.log(sta.substring(0, 20)); // 범위를 초과한다면 그냥 전체 sta 출력

console.log(str.toUpperCase());
console.log(sta.toLowerCase());

//index 위치의 글자 반환하기
var code = 'CodeStates';
console.log(code[1]);//o

//+ 연산자 사용
var a = 'hello';
var b = 'my name is ksh';
console.log(a + ' ' + b);

//length : 길이 반환
var c = 'who';
console.log(c.length);//3

//문자열이 포함하는 해당 찾고자하는 값의 시작 index 값 반환
var whale = 'Bluea Whale';
console.log(whale.indexOf('Blue')); // 0
console.log(whale.indexOf('blue')); // -1
console.log(whale.indexOf('Whale')); // 6

console.log(whale.lastIndexOf('a')); // 8