import {useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState(null);

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();

        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (Non-empty values!)'
            });
            setUsername('');
            setAge('');
            return;
        }

        if (Number(age) < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age'
            })
            setAge('');
            return;
        }

        props.onAddUser(username, age);
        setUsername('');
        setAge('');
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
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
                        value={username}
                        onChange={usernameChangeHandler}
                        placeholder={'put your name here'}
                    />
                    <label htmlFor={'age'}>Age</label>
                    <input
                        id={'age'}
                        type={'number'}
                        value={age}
                        onChange={ageChangeHandler}
                    />
                    <Button type={'submit'}>Add User</Button>
                </form>
            </Card>
        </div>
    )
};

export default AddUser;