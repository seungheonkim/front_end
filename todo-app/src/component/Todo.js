const Todo = (props) => {
    const deleteButton = (event) => {
        event.preventDefault();
        props.onDelete(props.id);
    }

    return (
        <tr>
            <td>{props.date}</td>
            <td>{props.todo}</td>
            <td>{props.isComplete === true ? '✅' : '❎'}</td>
            <td>
                <button onClick={deleteButton}>Delete</button>
            </td>
        </tr>
    )
}

export default Todo;