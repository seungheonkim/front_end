import React from "react";
import {Container, Wrapper} from "./App.styles";
import {InputForm} from "./components/InputForm";
import {TodoList} from "./components/TodoList";

function App() {
    return (
        <Container>
            <Wrapper>
                <h1>Todo List</h1>
                <InputForm/>
                <TodoList/>
            </Wrapper>
        </Container>
    );
}

export default App;
