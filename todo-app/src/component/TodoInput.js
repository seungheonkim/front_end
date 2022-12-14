import {forwardRef, useRef, useState} from "react";
import classes from './TodoInput.module.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const isEmpty = value => value.trim().length === 0;

const TodoInput = (props) => {
    const [todoInputValidity, setTodoInputValidity] = useState(true);
    const today = new Date().toISOString().slice(0, 10);
    const todoInputRef = useRef();
    const dateInputRef = useRef();

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

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
            <Stack className={classes.actions} spacing={2} direction={'row'}>
                <Button className={classes.submit} type={'submit'} variant="contained" onClick={handleClick}>
                    Add Todo
                </Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    {todoInputValidity ? (
                        <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                            Add Complete!!
                        </Alert>
                    ) : (
                        <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                            Enter your Todo!!
                        </Alert>
                    )}
                </Snackbar>
            </Stack>
        </form>
    )
};

export default TodoInput;