import Todo from "./Todo";

const Todos = (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th></th>
                <th>Date</th>
                <th>Todo</th>
            </tr>
            </thead>
            <tbody>
            {props.todos.map((todo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    todo={todo.todo}
                    date={todo.date}
                    isComplete={todo.isComplete}
                    onDelete={props.deleteTodo}
                    onEdit={props.editTodo}
                />
            ))}
            </tbody>
        </table>
    )
};

export default Todos;