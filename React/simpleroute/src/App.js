import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

//1. 라우트 준비하기
//Home 컴포넌트
const Home = () => {
    return <h1>Home</h1>;
}

//My Page 컴포넌트
const MyPage = () => {
    return <h1>MyPage</h1>;
}

//DashBoard 컴포넌트
const DashBoard = () => {
    return <h1>DashBoard</h1>;
}


//2. 메뉴 만들기
function App() {
    return (
        // 페이지를 새로고침하지 않고도 주소 변경이 가능
        // 상위에 작성되어야 Router 컴포넌트들을 사용 거눙
        <BrowserRouter>
        <div className="App">
            <nav>
                <ul>
                    <li>
                        {/*Link 컴포넌트를 이용하여 경로를 연결*/}
                        {/*Link 컴포넌트에는 페이지 전환을 방지하는 기능이 있어서 새로고침 현상이 없음*/}
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to={'/mypage'}>MyPage</Link>
                    </li>
                    <li>
                        <Link to={'/dashboard'}>Dashboard</Link>
                    </li>
                </ul>
            </nav>
            {/*주소 경로와 아까 만들어놓은 3개의 component 연결*/}
            {/*Routes 컴포넌트는 Route 컴포넌트들을 감싸고 있어야 한다*/}
            <Routes>
                {/*경로는 path로, 컴포넌트는 element로 연결해주기*/}
                {/*만약 사용자가 다음과 같이 지정된 주소가 아닌 이외의 주소로 접근하면 path='*' 로 설정되어 있는 컴포넌트를 보여주면 된다*/}
                <Route path='/' element={<Home/>}/>
                <Route path='/mypage' element={<MyPage/>}/>
                <Route path='/dashboard' element={<DashBoard/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
