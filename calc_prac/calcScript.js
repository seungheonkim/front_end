let calculator = document.querySelector('.calculator')
let buttons = calculator.querySelector('.calculator__buttons')

let display = document.querySelector('.display')

function calculate(n1, operator, n2) {
    let result = 0;

    let firstNum = Number(n1);
    let secondNum = Number(n2);

    if (operator === '+') {
        result = firstNum + secondNum;
    } else if (operator === '-') {
        result = firstNum - secondNum;
    } else if (operator === '*') {
        result = firstNum * secondNum;
    } else {
        result = Math.round((firstNum / secondNum) * 100) / 100;//소수점 2번째 자리까지만 표현하기
    }

    return String(result);
}


//사용할 변수들
let isOperatorEmpty = true;//연산자 정보 아직 없으면 true, 있으면 false
let num1 = '';
let num2 = '';
let operator = '';

buttons.addEventListener('click', function (event) {
    let target = event.target;
    let action = target.classList[0];
    let buttonContent = target.textContent;


    if (target.matches('button')) {
        //버튼을 클릭할 경우에만
        if (action === 'number') {
            //숫자를 입력하면
            if (isOperatorEmpty) {//만약 연산자가 주어지지 않았을 경우에는 num1 이므로
                if (display.textContent === '0') display.textContent = '';//0이라면 빈 문자열로 재할당
                num1 += buttonContent;//num1 변수에 button.textContent 값을 할당함
                display.textContent = num1;//display 화면에 num1 값을 띄워줌
            } else {
                if (display.textContent === '0') display.textContent = '';
                num2 += buttonContent;
                display.textContent = num2;
            }
        }

        if (action === 'operator') {
            //연산자 입력하면
            operator = buttonContent;
            display.textContent = operator;
            isOperatorEmpty = false;//연산자를 입력했으므로 false로 변경
        }

        if (action === 'decimal') {
            if (isOperatorEmpty) {
                num1 += buttonContent;
                display.textContent = num1;
            } else {
                num2 += buttonContent;
                display.textContent = num2;
            }
        }

        if (action === 'AC') {//초기화
            display.textContent = '0';
            operator.textContent = '';
            isOperatorEmpty = true;
            num1 = '';
            num2 = '';
        }

        if (action === 'calculate') {
            display.textContent = calculate(num1, operator, num2);
        }
    }
})