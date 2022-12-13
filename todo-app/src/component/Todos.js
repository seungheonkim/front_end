import Todo from "./Todo";

const Todos = (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Todo</th>
                <th>Complete</th>
            </tr>
            </thead>
            <tbody>
            {props.todos.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo.todo}
                    date={todo.date}
                    isComplete={todo.isComplete}
                />
            ))}
            </tbody>
        </table>
    )
};

export default Todos;