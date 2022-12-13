import {useRef, useState} from "react";
import classes from './TodoInput.module.css';

const isEmpty = value => value.trim().length === 0;

const TodoInput = (props) => {
    const [todoInputValidity, setTodoInputValidity] = useState(true);
    const today = new Date().toISOString().slice(0, 10);
    const todoInputRef = useRef();
    const dateInputRef = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const enteredTodo = todoInputRef.current.value;
        const enteredDate = dateInputRef.current.value;

        const enteredTodoIsValid = !isEmpty(enteredTodo);

        setTodoInputValidity(enteredTodoIsValid);

        if (!enteredTodoIsValid) return;

        let newTodo = {
            todo: enteredTodo,
            date: enteredDate,
            isComplete: false,
        }

        props.onSubmit(newTodo);
    };

    const todoControlClasses = `${classes.control} ${todoInputValidity ? '' : classes.invalid}`;

    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <div className={todoControlClasses}>
                <label htmlFor={'todo'}>Todo</label>
                <input
                    type={'text'}
                    id={'todo'}
                    placeholder={'Todo'}
                    ref={todoInputRef}
                />
                {!todoInputValidity && <p>Please enter your Todo!!</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor={'date'}>date</label>
                <input
                    type={'date'}
                    id={'date'}
                    defaultValue={`${today}`}
                    ref={dateInputRef}
                />
            </div>
            <div className={classes.actions}>
                <button className={classes.submit} type={'submit'}>Add Todo</button>
            </div>
        </form>
    )
};

export default TodoInput;