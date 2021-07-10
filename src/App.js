import TodoList from "./TodoList";
import { useState, useRef, useEffect } from 'react'
import {v4 as uuid} from 'uuid'
const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const stored_Todos = JSON.parse(localStorage.getItem
      (LOCAL_STORAGE_KEY))
    if (stored_Todos) setTodos(stored_Todos)
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id ===id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  function ClearTodos() {
    setTodos([])
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    console.log(name)
    todoNameRef.current.value = null
    setTodos(prevTodos => {
      return [...prevTodos, { id:uuid(), name: name, complete: false}]
    }
    )
  }

  return (
    <>
    <div class="content">
    <div class="todos">
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
    <input ref={todoNameRef}type="text" placeholder="Type here"/>
    <button class="button normal" onClick={handleAddTodo}>Add todo</button>
    <button class="button normal" onClick={handleClearTodos}>Clear Completed</button>
    <button class="button important" onClick={ClearTodos}>Reset</button>
    <div class="counter">{todos.filter(todos => !todos.complete).length} left to do</div>
    </div>
    </>
  )
}
export default App;
