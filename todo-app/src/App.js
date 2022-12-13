import './App.css';
import React, {useEffect, useState} from "react";
import Todos from "./component/Todos";
import TodoInput from "./component/TodoInput";

function App() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setisLoading] = useState(true);
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
            setisLoading(false);
        }

        fetchTodos()
            .catch(err => {
                setisLoading(false);
                setHttpError(err.message);
            })
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>...is Loading...</p>
            </section>
        )
    }

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
    }

    return (
        <div className="App">
            <TodoInput onSubmit={submitTodoHandler}/>
            <Todos todos={todos}/>
        </div>
    );
}

export default App;
