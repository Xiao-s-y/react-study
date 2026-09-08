import React from 'react'
import './index.css'
import Item from '../Item'

export default function List({todos,updateTodo,deleteTodo}) {
 return (
       <ul className="todo-main">
        {
            todos.map((todo)=>{
                return  <Item key={todo.id} todo={todo} updateTodo={updateTodo}  deleteTodo={deleteTodo}/>
            })
        }
       </ul>
     )
}
