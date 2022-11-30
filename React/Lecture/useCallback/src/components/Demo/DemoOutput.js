import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    console.log('DemoOutput RUNNING!');
    return (
        <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
    )
}

//optimize functional components
//look at the props that component gets
//check the new value for all those props
//compare with previous value
//only if the value changes => re-evaluate
//if not changed => not re-rendering
//자식 컴포넌트가 굉장히 많은 컴포넌트라면 memo 를 통해 쓸모없는 리렌더링을 방지할 수 있음
export default React.memo(DemoOutput);
//Boolean 은 원시값이기 때문에 계속 동일한 주소값이 유지됨
//false === false => true
//따라서 memo()를 통해 동일한 상태가 유지되는 이상 리렌더링 되지 않음