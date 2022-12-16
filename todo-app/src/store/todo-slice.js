import {createSlice} from "@reduxjs/toolkit";

const initialTodoState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialTodoState,
    reducers: {
        updateTodo(state, action) {
            state.todos = action.payload.todos;
        },
        addTodo(state, action) {
            const newTodo = action.payload;
            state.todos.push({
                date: newTodo.date,
                todo: newTodo.todo,
                isComplete: newTodo.isComplete,
            })
        },
        deleteTodo(state, action) {
            const id = action.payload;

            state.todos = state.todos.filter(todo => todo.id !== id);
        },
    }
});

export const todoActions = todoSlice.actions;
export default todoSlice;