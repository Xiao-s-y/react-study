import React, { useState } from 'react'
import './index.css'

export default function Item({todo,updateTodo,deleteTodo}) {
  
  //初始化鼠标状态
  const [mouse,setMouse]=useState(false)
 
  //删除todo
  const handleDelete=(id)=>{
     if(window.confirm('确定删除吗？')){
        deleteTodo(id)
     }
   }

   //鼠标移入移出
   const handleMouse=(flag)=>{
    return ()=>setMouse(flag)
   }

   //鼠标点击勾选和取消
   const handleCheck=(id,done)=>{
    updateTodo(id,!done)
   }


  return (
     <li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseLeave={handleMouse(false)} onMouseEnter={handleMouse(true)}>
        <label>
               <input type="checkbox" checked={todo.done} onChange={()=>handleCheck(todo.id,todo.done)}/>
            <span>{todo.name}</span>
        </label>
        <button className="btn btn-danger" onClick={()=>handleDelete(todo.id)} style={{display:mouse?'block':'none'}}>删除</button>
    </li>
  )
      
}
