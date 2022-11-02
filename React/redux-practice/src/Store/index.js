import {legacy_createStore as createStore} from 'redux';
import {counterReducer} from "../Reducers";

export const store = createStore(counterReducer);