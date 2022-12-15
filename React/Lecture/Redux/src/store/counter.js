import {createSlice} from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;