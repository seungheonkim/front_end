import {useRef} from "react";

const TodoInput = (props) => {
    const today = new Date().toISOString().slice(0, 10);
    const todoInputRef = useRef();
    const dateInputRef = useRef();

    // const isEmpty = value => value.trim().length === 0;

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const enteredTodo = todoInputRef.current.value;
        const enteredDate = dateInputRef.current.value;

        let newTodo = {
            todo: enteredTodo,
            date: enteredDate,
            isComplete: false,
        }

        props.onSubmit(newTodo);
        window.location.reload();
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div>
                <label htmlFor={'todo'}>Todo</label>
                <input
                    type={'text'}
                    id={'todo'}
                    placeholder={'Please Enter Todo'}
                    ref={todoInputRef}
                />
            </div>
            <div>
                <label htmlFor={'date'}>date</label>
                <input
                    type={'date'}
                    id={'date'}
                    defaultValue={`${today}`}
                    ref={dateInputRef}
                />
            </div>
            <button type={'submit'}>Add Todo</button>
        </form>
    )
};

export default TodoInput;