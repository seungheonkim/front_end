import {todoActions} from "./todo-slice";
import {uiActions} from "./ui-slice";

export const fetchTodoData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://todo-app-b1dff-default-rtdb.firebaseio.com/todos.json', {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error('Could not fetch todo data!!');
            }

            return await response.json();
        };

        try {
            const todoData = await fetchData();
            const loadedTodos = [];

            for (const key in todoData) {
                loadedTodos.unshift({
                    id: key,
                    todo: todoData[key].todo,
                    date: todoData[key].date,
                    isComplete: todoData[key].isComplete,
                });
            }
            // const sortedByDateTodo = loadedTodos.sort((a, b) => new Date(b.date) - new Date(a.date));

            dispatch(todoActions.updateTodo({
                todos: loadedTodos || [],
            }));
        } catch (e) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching todo data failed!',
            }))
        }
    };
};

export const sendTodoData = (todoData) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending todo data!',
            }));

        const sendRequest = async () => {
            await fetch('https://todo-app-b1dff-default-rtdb.firebaseio.com/todos.json', {
                method: 'POST',
                body: JSON.stringify(todoData)
            })
        }

        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Send todo data successfully!',
            }))

        } catch (e) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending todo data failed!',
            }))
        }
    }
};

export const deleteTodoData = (id) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Deleting todo data!',
            }));

        const sendRequest = async () => {
            await fetch(`https://todo-app-b1dff-default-rtdb.firebaseio.com/todos/${id}.json`, {
                method: 'DELETE',
            })
        }

        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Delete todo data successfully!',
            }));

        } catch (e) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Deleting todo data failed!',
            }))
        }
    }
};

export const updateTodoData = (updatedData, id) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Updating todo data!',
            }));

        const sendRequest = async () => {
            await fetch(`https://todo-app-b1dff-default-rtdb.firebaseio.com/todos/${id}.json`, {
                method: 'PATCH',
                body: JSON.stringify(updatedData),
            })
        }

        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Updating todo data successfully!',
            }))
        } catch (e) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Updating todo data failed!',
            }))
        }
    }
}

