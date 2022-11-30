import React, {useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
    const [showPara, setShowPara] = useState(false);

    console.log('App Running!!');

    const toggleParagraphHandler = () => {
        setShowPara(prevShowPara => !prevShowPara);
    };



    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={false}/>
            <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
        </div>
    );
}

export default App;
