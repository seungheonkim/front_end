import {createStore} from "redux";
import {createSlice, configureStore} from "@reduxjs/toolkit";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREASE = 'INCREASE';
export const TOGGLE = 'TOGGLE';

const initialState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            //state 를 자동으로 복제함
            //state 불변성을 알아서 지켜준다!! 따라서 원본 자체를 변경하는 것처럼 작성해보여도 사실상 복제해서 하는 것
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    }
})

//항상 덮어쓰기 때문에 side effect 가 일어남
// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'INCREMENT') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         }
//     }
//
//     if (action.type === 'DECREMENT') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         }
//     }
//
//     if (action.type === 'INCREASE') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         }
//     }
//
//     if (action.type === 'TOGGLE') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter,
//         }
//     }
//
//     return state;
// };

// const store = createStore(counterReducer);

const store = configureStore({
    //reducer 들을 모두 모아서 store 에 전달함
    reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;

