import logo from './logo.svg';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Questions from "./Pages/Questions";

function App() {
    return (
        <BrowserRouter>
            <div className={'App'}>
                <main>
                    {/*사이드바*/}
                    <section className={'features'}>
                            <Questions/>
                    </section>
                </main>
            </div>
        </BrowserRouter>

    );
}

export default App;
