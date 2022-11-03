export const ADD = 'ADD';
export const DELETE = 'DELETE';

let id = 1;

//할일 추가
export const add_todo = (todo) => {
    return {
        type: ADD,
        todo: {
            id: id++,
            title: todo.title,
            isComplete: todo.isComplete
        }
    }
}

//할 일 삭제
export const delete_todo = (id) => {
    return {
        type: DELETE,
        todo: {
            id
        }
    }
}