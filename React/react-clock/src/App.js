import './App.css';
import React from "react";

const Welcome = (props) => {
    return <h1>Hello, {props.name}</h1>;
}

//class 로 Clock 컴포넌트 설정하기
class Clock extends React.Component {
    //1. 초기 상태인 this.state를 설정하는 생성자 생성하기
    constructor(props) {
        //class component 는 항상 props 로 기본 생성자를 호출해야함
        super(props);
        //일단 화면이 뜨자마자 현재 시간을 랜더링 해줘야 하기 때문에 초기값 시간 설정해주기
        this.state = {date: new Date()};
    }

    //2. 생명주기 메서드 추가하기
    //2-1. 마운팅 : clock 이 DOM 에 처음으로 렌더링 될때마다 타이머를 설정
    componentDidMount() {
        //1초마다 interval 을 통해 tick 함수로 date값을 매초 갱신
        //setInterval은 임의의 timerID값을 반환하므로 랜더링 될때마다 새로운 timerID 가 정해짐
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    //2-2. 언마운팅 : clock에 의해 생성된 DOM 이 삭제될 때마다 타이머를 해제
    componentWillUnmount() {
        //마운팅을 통해 생성된 timerID 를 clearInterval 을 통해 삭제
        clearInterval(this.timerID);
    }

    //3. Clock component 가 매초 작동하도록 하는 tick() 구현하기
    tick() {
        //this.state 설정하기
        this.setState(
            {date: new Date()}
        )
    }

    //render 함수
    render() {
        return (
            <div>
                <h1>this is timer!!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

function App() {

    return (
        <div className="App">
            <Welcome name='seung-heon'/>
            <Clock/>
        </div>
    );
}

export default App;
