import { useState } from "react"
// import Array from "./Array"
import Form from "./Form"
import Todolist from "./Todolist"
import Footer from './Footer'

export default function Todo(){
    const [todos, setTodos] = useState([]);
    const totaltodos= todos.length
    const completedtodos = todos.filter(todo=> todo.done).length
    console.log(completedtodos)
    return <div>
        <Form todos={todos} setTodos={setTodos}/>
        <Todolist todos={todos} setTodos={setTodos} />
        <Footer completedtodos={completedtodos} totaltodos={totaltodos}  />
    </div>
}