import {Checkbox} from "@mui/material";
import {useState} from "react";
import classes from './Todo.module.css';

const Todo = (props) => {
    const [checked, setChecked] = useState(props.isComplete);

    const deleteButton = (event) => {
        event.preventDefault();
        props.onDelete(props.id);
    }

    const isCompleteHandler = (event) => {
        setChecked(!checked);
        let edited = {
            isComplete: !checked,
        };
        props.onEdit(props.id, edited);
    }

    const showCompletedClasses = `${classes.table} ${checked ? classes.complete : ''}`

    return (
        <tr className={showCompletedClasses}>
            <td><Checkbox
                checked={checked}
                onClick={isCompleteHandler}
                inputProps={{'aria-label': 'controlled'}}
            /></td>
            <td>{props.date}</td>
            <td>{props.todo}</td>
            <td>
                <button onClick={deleteButton}>Delete</button>
            </td>
        </tr>
    )
}

export default Todo;