import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    //reducer 들을 모두 모아서 store 에 전달함
    reducer: {
        counter: counterReducer,
        auth: authReducer
    },
});

export default store;

