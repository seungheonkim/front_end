import './App.css';
import React, {Fragment, useEffect, useState} from "react";
import Todos from "./component/Todos";
import TodoInput from "./component/TodoInput";
import {Loading} from "./UI/Loading";

function App() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch('https://todo-app-b1dff-default-rtdb.firebaseio.com/todos.json');
            const data = await response.json();

            const loadedTodos = [];

            for (const key in data) {
                loadedTodos.push({
                    id: key,
                    todo: data[key].todo,
                    date: data[key].date,
                    isComplete: data[key].isComplete,
                });
            }
            setTodos(loadedTodos);
            setIsLoading(false);
        }

        fetchTodos()
            .catch(err => {
                setIsLoading(false);
                setHttpError(err.message);
            })
    }, []);

    if (httpError) {
        return (
            <section>
                <p>{httpError}</p>
            </section>
        )
    }

    const submitTodoHandler = async (todoData) => {
        await fetch('https://todo-app-b1dff-default-rtdb.firebaseio.com/todos.json', {
            method: 'POST',
            body: JSON.stringify(todoData),
        });
    };

    const deleteTodoHandler = async (todoId) => {
        await fetch(`https://todo-app-b1dff-default-rtdb.firebaseio.com/todos/${todoId}.json`, {
            method: "DELETE",
        })
    }

    return (
        <div className="App">
            {isLoading ? <Loading/> : (
                <Fragment>
                    <TodoInput onSubmit={submitTodoHandler}/>
                    <Todos todos={todos} deleteTodo={deleteTodoHandler}/>
                </Fragment>
            )}

        </div>
    );
}

export default App;
