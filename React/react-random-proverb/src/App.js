import logo from './logo.svg';
import './App.css';

function App() {
    const proverbs = [
        '누워서 떡먹기',
        '낫 놓고 기억자 모른다',
        '친구따라 강남간다',
    ]

    const getRandomIndex = (length) => {
        return parseInt(Math.random() * length);
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> 파일고치고 저장하면 새로고침됩니다.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {proverbs[getRandomIndex(proverbs.length)]}
                </a>
            </header>
        </div>
    );
}

export default App;
