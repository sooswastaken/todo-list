import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <label class="container">{todo.name}
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
            <span class="checkmark"></span>
        </label>
        )
}