import style from './footer.module.css'
export default function Footer ({completedtodos, totaltodos}){
    return<div className={style.footer}>
        <span className={style.item}>Completed Todos: {completedtodos}</span>
        <span className={style.item}>Total Todos: {totaltodos}</span>
    </div>
}