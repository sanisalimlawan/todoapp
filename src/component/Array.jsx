import style from './todoitem.module.css'
export default function Array( {list, todos, setTodos} ){
    function handledelet(list){
     setTodos(todos.filter(todo => todo !== list))
    }
    function handleclick(list){
        const  newArray = todos.map(todo => todo.name === list ? {...todo, done:!todo.done} : todo )
        setTodos(newArray);
    }
    const className = list.done ? style.completed : '';
//    console.log(item)
    return  <div className={style.item
    }>
        <div className={style.itemname}>
            <span onClick={() => handleclick(list.name)} className={className}>{list.name} </span> 
            <span> <button className={style.deletbutton} onClick={() => handledelet(list)}  >x</button></span> 
        </div> 
    </div>
}