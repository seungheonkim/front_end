import React from "react";
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Discussions from "./Pages/Discussions";

function App() {
    return (
        <BrowserRouter>
            <div className={'App'}>
                <main>
                    {/*사이드바*/}
                    <section className={'features'}>
                        <Discussions/>
                    </section>
                </main>
            </div>
        </BrowserRouter>

    );
}

export default App;
