import {ADD, DELETE} from "./action";

export const initialState = {
    todos: [
        {
            id: 0,
            title: 'hello',
            isComplete: false
        }
    ],
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }

        case DELETE:
            return {
                ...state,
                todos: state.todos.filter((todo) => {
                    return todo.id !== action.todo.id
                })
            }

        default:
            return state;
    }
}