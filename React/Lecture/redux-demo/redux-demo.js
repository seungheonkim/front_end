const redux = require('redux');

//reducer function
//2 parameters => old state + dispatched action => new state object, number, string
//should be a pure function = same input leads to same output
//state should have a default value
const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1,
        }
    }

    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1,
        }
    }

    return state;
};

//create store
const store = redux.createStore(counterReducer);

// console.log(store.getState());//latest state = 1

//subscribe store
const counterSubscriber = () => {
    const latestState = store.getState();//get the latest update store after changed!
    console.log(latestState);
};

store.subscribe(counterSubscriber);

//create and dispatch actions
store.dispatch({
    type: 'INCREMENT'
});
//1

store.dispatch({
    type: 'DECREMENT'
});
//0
