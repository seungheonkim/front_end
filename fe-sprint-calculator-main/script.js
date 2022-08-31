const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

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
    } else {
        result = num1 / num2;
    }
    return String(result);
}

let isOperatorEmpty = true;

buttons.addEventListener('click', function (event) {
    // 버튼을 눌렀을 때 작동하는 함수입니다.

    const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
    const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
    const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
    // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

    if (target.matches('button')) {
        // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
        // 클릭된 HTML 엘리먼트가 button이면
        if (action === 'number') {
            // 그리고 버튼의 클레스가 number이면
            // 아래 코드가 작동됩니다.
            if (isOperatorEmpty) {
                if (firstOperend.textContent === '0') firstOperend.textContent = '';
                firstOperend.textContent += buttonContent;
            } else {
                secondOperend.textContent += buttonContent;
            }
        }

        if (action === 'operator') {
            operator.textContent = buttonContent;
            isOperatorEmpty = false;
        }

        if (action === 'decimal') {
            if (isOperatorEmpty) {
                firstOperend.textContent += '.';
            } else {
                secondOperend.textContent += '.';
            }
        }

        if (action === 'clear') {
            firstOperend.textContent = '0';
            secondOperend.textContent = '0';
            operator.textContent = '+';
            calculatedResult.textContent = '0';
            isOperatorEmpty = true;
            console.log('초기화 버튼');
        }

        if (action === 'calculate') {
            calculatedResult.textContent = calculate(
                firstOperend.textContent,
                operator.textContent,
                secondOperend.textContent);
            console.log('계산 버튼');
        }
    }
})
;


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
    // 버튼을 눌렀을 때 작동하는 함수입니다.

    const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
    const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
    const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
    // ! 위 코드는 수정하지 마세요.

    // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
    if (target.matches('button')) {
        if (action === 'number') {
            if (display.textContent === '0' || previousKey === 'operator') {
                display.textContent = buttonContent;
            } else {
                display.textContent += buttonContent;
            }
            previousKey = 'number';
        }
        if (action === 'operator') {
            if (firstNum && operatorForAdvanced && previousKey !== 'operator' && previousKey !== 'calculate') {
                //firstNum 이 있고, operator 가 존재할 경우
                display.textContent = calculate(firstNum, operatorForAdvanced, display.textContent);
            }
            firstNum = display.textContent;
            operatorForAdvanced = buttonContent;
            previousKey = 'operator';
        }
        if (action === 'decimal') {
            //. 이 하나이상 나오면 안됨
            // 점이 하나라도 있는 경우 -> 조건 처리해주자
            // 현재 화면에 떠있는 숫자에 '.' 이 포함되어 있지 않고, 직전에 누를 키가 operator 가 아닐 때
            if (!display.textContent.includes('.') && previousKey !== 'operator') {
                //점이 하나도 없으면 추가
                display.textContent += buttonContent;
            } else if (previousKey === 'operator') { // 현재 화면에 . 이 포함되어 있거나, 직전에 누른 키가 operator 일때
                display.textContent = '0.';
            }
            previousKey = 'decimal';
        }
        if (action === 'clear') {
            display.textContent = '0';
            firstNum = undefined;
            operatorForAdvanced = undefined;
            previousNum = undefined;
            previousKey = 'clear';
        }
        if (action === 'calculate') {
            if (firstNum) {
                //firstNum이 있다는건 operator가 무조건 쓰였다는 의미
                //firstNum 이 없다면 operator 안쓰였다는 의미이기 때문에 enter 눌러도 숫자 그대로!
                if (previousKey === 'calculate') {
                    display.textContent = calculate(display.textContent, operatorForAdvanced, previousNum);
                } else {
                    previousNum = display.textContent;
                    display.textContent = calculate(firstNum, operatorForAdvanced, previousNum);
                    previousKey = 'calculate';
                }
            }
        }
    }

});
