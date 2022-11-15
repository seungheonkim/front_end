import {useRef, useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState(null);

    const addUserHandler = (event) => {
        event.preventDefault();

        //ref => uncontrolled components ex)<input>
        //useState => controlled components
        const enteredName = nameInputRef.current.value;//{current: input#username}
        const enteredAge = ageInputRef.current.value;//{current: input#username}

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (Non-empty values!)'
            });
            return;
        }

        if (Number(enteredAge) < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age'
            })
            return;
        }

        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor={'username'}>Name</label>
                    <input
                        id={'username'}
                        type={'text'}
                        placeholder={'put your name here'}
                        ref={nameInputRef}
                    />
                    <label htmlFor={'age'}>Age</label>
                    <input
                        id={'age'}
                        type={'number'}
                        ref={ageInputRef}
                    />
                    <Button type={'submit'}>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
};

export default AddUser;