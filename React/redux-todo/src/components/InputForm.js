import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {InputBox, InputButton, InputContainer} from "./InputForm.styles";
import {add_todo} from "../commons/action";

export const InputForm = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleClick = () => {
        const todo = {
            title: text,
            isComplete: false,
        }

        dispatch(add_todo(todo));
        setText('');
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    }

    return (
        <InputContainer>
            <InputBox
                type={'text'}
                placeholder={'할 일을 입력하세요'}
                value={text}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <InputButton onClick={handleClick}>ADD</InputButton>
        </InputContainer>
    )
}