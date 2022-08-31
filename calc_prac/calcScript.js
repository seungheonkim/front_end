let calculator = document.querySelector('.calculator');
let button = calculator.querySelector('.calculator__buttons');

let display = document.querySelector('.result');

function calculate(n1, operator, n2) {
    let result = 0;

    let num1 = Number(n1);
    let num2 = Number(n2);

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }
    return String(result);
}

//사용될 변수들
let firstNum, operator, previousNum, previousKey;

button.addEventListener('click', function (event) {
    let target = event.target;
    let action = target.classList[0];
    let buttonContent = target.textContent;

    if (target.matches('button')) {
        //button 을 클릭했을 경우
        if (action === 'number') {
            //숫자를 클릭했을 경우
            if (display.textContent === '0' || previousKey === 'operator') {
                //초기상태가 0인 상황이거나 or 두번째 수 입력할때, 즉 직전 입력키가 연산자일 때
                display.textContent = buttonContent;
            } else {
                display.textContent += buttonContent;
            }
            previousKey = 'number';
        }
        if (action === 'operator') {
            //연산자 클릭했을 경우
            if (firstNum &&
                operator &&
                previousKey !== 'operator' &&
                previousKey !== 'calculate') {
                //firstNum이 존재하고, 연산자도 이미 입력이 되었으며, 직전 입력된 버튼이 연산자 버튼과 =버튼이 아니면
                display.textContent = calculate(firstNum, operator, display.textContent);
            }
            firstNum = display.textContent;//연산자 입력 전까지 입력된 숫자를 firstNum
            operator = buttonContent;//해당 연산자를 변수에 할당
            previousKey = 'operator'
        }
        if (action === 'decimal') {
            // . 입력했을 경우
            if (!display.textContent.includes('.') && previousKey !== 'operator') {
                //점이 하나도 없고, 직전 입력된 버튼이 연산자 버튼이 아니라면(처음에 입력된 숫자라면)
                display.textContent += buttonContent;//점을 추가
            } else if (previousKey === 'operator') {
                //점이 하나도 없고, 직전 입력 버튼이 연산자 버튼이라면(두번째 입력된 숫자라면)
                display.textContent = '0.';
            }
            previousKey = 'decimal';
        }
        if (action === 'AC') {
            //초기화 버튼 클릭했을 경우
            display.textContent = '0';
            firstNum = undefined;
            operator = undefined;
            previousNum = undefined;
            previousKey = 'AC';
        }
        if (action === 'calculate') {
            //= 클릭했을 경우
            if (firstNum) {
                //firstNum 이 존재하는 경우
                //이때는 이미 연산자를 입력했다는 의미
                if (previousKey === 'calculate') {
                    //연속으로 = 을 누르면 해당 마지막 수에 해당 연산자로 계속 동일 계산 반복
                    display.textContent = calculate(display.textContent, operator, previousNum);
                } else {
                    previousNum = display.textContent;//= 누르기 직전 숫자를 previousNum 에 저장
                    display.textContent = calculate(firstNum, operator, previousNum);
                    previousKey = 'calculate';
                }
            }
            //firstNum 이 존재하지 않는 경우
            //연산자 입력 전이라는 의미이기 때문에
            //= 버튼 눌러도 해당 숫자는 그대로 유지
        }
    }
})