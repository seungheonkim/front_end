import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
    console.log('Button RUNNING!');
    return (
        <button
            type={props.type || 'button'}
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default React.memo(Button);
//memo() 처리했는데 왜 계속 리렌더링 될까?
//App.js 에 존재하는 토글핸들러가 일반 함수이기 때문에
//App.js 가 렌더링이 되면 해당 토글핸들러 함수도 리렌더링이 되게
//따라서 Button 컴포넌트의 props 도 계속 새로운 함수가 전달되기 때문에(새로운 주소값을 가진)
//memo()가 먹히지 않는것임!! => 새로운 props가 전달되었기 때문
//따라서 함수와 같은 참조값은 생성될 때마다 새로운 주소값을 하당받기 때문에 memo()로는 리렌더링 방지 불가능