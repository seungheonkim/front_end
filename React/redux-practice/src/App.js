import React from 'react';
import './style.css';
import {useDispatch, useSelector} from 'react-redux';
import {decrease, increase, reset} from './Actions';

export default function App() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log(state);

    const plusNum = () => {
        dispatch(increase());
    };

    const minusNum = () => {
        dispatch(decrease());
    };

    const setNum = () => {
        dispatch(reset(1));
    }

    return (
        <div className="container">
            <h1>{`Count: ${state}`}</h1>
            <div>
                <button className="plusBtn" onClick={plusNum}>
                    +
                </button>
                <button className="minusBtn" onClick={minusNum}>
                    -
                </button>
                <button className="resetBtn" onClick={setNum}>
                    1
                </button>
            </div>
        </div>
    );
}
