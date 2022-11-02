import {initialState} from "./initialState";
import {DECREASE, INCREASE, RESET} from "../Actions";

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return state + 1;

        case DECREASE:
            return state - 1;

        case RESET:
            return action.payload;

        default:
            return state;
    }
}
