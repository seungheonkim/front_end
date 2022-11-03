import {useSelector} from "react-redux";
import React from "react";
import {ListContainer} from "./TodoList.styles";
import {TodoItem} from "./TodoItem";

export const TodoList = () => {
    const todos = useSelector(state => state.todos);

    return (
        <ListContainer>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </ListContainer>
    )
}