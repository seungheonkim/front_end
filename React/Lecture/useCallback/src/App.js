import React, {useCallback, useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
    const [showPara, setShowPara] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    console.log('App Running!!');

    //save a function to reuse it without re-rendering
    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle) {
            setShowPara(prevShowPara => !prevShowPara);
        }
    }, [allowToggle]);

    const allowToggleHandler = () => {
        setAllowToggle(true);
    }

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={showPara}/>
            <Button onClick={allowToggleHandler}>Allow Toggling</Button>
            <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
        </div>
    );
}

export default App;
