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

    const showCompletedClasses = `${classes.list} ${checked ? classes.complete : ''}`

    return (
        <li className={showCompletedClasses}>
            <Checkbox
                checked={checked}
                onClick={isCompleteHandler}
                inputProps={{'aria-label': 'controlled'}}
            />
            <div className={classes.dateBox}>{props.date}</div>
            <div className={classes.todoBox}>{props.todo}</div>
            <button onClick={deleteButton} disabled={!checked}>Delete</button>
        </li>
    )
}

export default Todo;