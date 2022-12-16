import React, {Fragment, useEffect, useState} from "react";
import Todos from "./component/Todos";
import TodoInput from "./component/TodoInput";
import Notification from "./UI/Notification";
import {Loading} from "./UI/Loading";
import Header from "./Layout/Header";
import {useDispatch, useSelector} from "react-redux";
import {deleteTodoData, fetchTodoData, sendTodoData, updateTodoData} from "./store/todo-actions";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();
    const notification = useSelector(state => state.ui.notification);

    useEffect(() => {
        dispatch(fetchTodoData());
        setIsLoading(false);
    }, [dispatch]);

    const submitTodoHandler = (todoData) => {
        dispatch(sendTodoData(todoData));
        setTimeout(() => window.location.reload(), 1000);
        setIsLoading(false);
    };

    const deleteTodoHandler = (todoId) => {
        dispatch(deleteTodoData(todoId));
        setTimeout(() => window.location.reload(), 1000);
        setIsLoading(false);
    }

    const editTodoHandler = (updatedData, todoId) => {
        dispatch(updateTodoData(updatedData, todoId));
    }

    return (
        <Fragment>
            {notification && <Notification
                status={notification.status}
                title={notification.title}
                message={notification.message}
            />}
            <Header/>
            {isLoading ? <Loading/> : (
                <main>
                    <TodoInput onSubmit={submitTodoHandler}/>
                    <Todos deleteTodo={deleteTodoHandler} editTodo={editTodoHandler}/>
                </main>
            )}
        </Fragment>
    );
}

export default App;
