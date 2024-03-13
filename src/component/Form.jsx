import { useState } from "react"
import style from './Form.module.css'
// import Todolist from "./Todolist";
export default function Form({ todos, setTodos }){
   
    const [todo, settodo] = useState({name:'', done: false})
    function handlesubmit(e){
        setTodos([...todos,todo]);
        settodo({name:'', done: false})
       console.log(todos)
      e.preventDefault()
    }
    return(
        <form className={style.todoform} onSubmit={handlesubmit}>
            <input type="text" value={todo.name} className={style.input} placeholder="add a task...." onChange={e => settodo({name:e.target.value, done: false})} />
            <button type="submit" className={style.fbutton}>Add</button>
        </form>
    )
}