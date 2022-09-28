import logo from './logo.svg';
import './App.css';

function App() {
    const proverbs = [
        '누워서 떡먹기',
        '낫 놓고 기억자 모른다',
        '친구따라 강남간다',
        '소 잃고 외양간 고친다'
    ]

    const getRandomIndex = (length) => {
        return parseInt(Math.random() * length);
    }

    const showAllProverbs = (proverb) => {
        return (
            <p>{proverb}</p>
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> 파일고치고 저장하면 새로고침됩니다.
                </p>
                {/*{proverbs[getRandomIndex(proverbs.length)]}*/}
                {proverbs.map(showAllProverbs)}
            </header>
        </div>
    );
}

export default App;
