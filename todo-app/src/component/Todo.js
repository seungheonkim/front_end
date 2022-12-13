const Todo = (props) => {
    return (
        <tr>
            <td>{props.date}</td>
            <td>{props.todo}</td>
            <td>{props.isComplete === true ? '✅' : '❎'}</td>
        </tr>
    )
}

export default Todo;