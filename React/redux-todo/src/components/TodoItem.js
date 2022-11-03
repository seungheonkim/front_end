import {useDispatch} from "react-redux";
import React from "react";
import {delete_todo} from "../commons/action";
import {DelBtn, Text, TextColumn, TodoContainer} from "./TodoItem.styles";

export const TodoItem = ({todo}) => {
    const dispatch = useDispatch();

    const {id, title} = todo;

    const handleClick = () => {
        dispatch(delete_todo(id));
    }
    return (
        <TodoContainer>
            <TextColumn>
                <div>
                    <Text>{title}</Text>
                </div>
                <DelBtn onClick={handleClick}>&times;</DelBtn>
            </TextColumn>
        </TodoContainer>
    )
}