import Todo from "./Todo";
import classes from './Todos.module.css';
import React from "react";
import {useSelector} from "react-redux";

const Todos = (props) => {
    const todos = useSelector(state => state.todo.todos);

    return (
        <section className={classes['todo-wrapper']}>
            <div className={classes['content-title']}>
                <div>완료</div>
                <div className={classes['date-title']}>등록일</div>
                <div className={classes['todo-title']}>할일</div>
                <div>삭제</div>
            </div>
            <ul className={classes['todo-container']}>
                {todos.map((todo) => (
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
            </ul>
        </section>
    )
};

export default Todos;