import Array from './Array'
import style from './todolist.module.css'

export default function Todolist ( {todos, setTodos} ){
  const sortedtodo =  todos.slice().sort((a,b) => Number(a.done-b.done))
    return(
        <div className={style.list}>
         {sortedtodo.map(item => (
            <Array list={item} key={item.name} todos={todos} setTodos={setTodos} />
         )
         )}
        </div>
)}