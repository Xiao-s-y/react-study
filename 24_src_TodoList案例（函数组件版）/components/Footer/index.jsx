import React from 'react'
import './index.css'

export default function Footer({todos,checkAllTodo,clearAllDone}) {
    //记录完成的个数
   const Count=(todos)=>{
    let count=0
     todos.forEach(todoObj=>{
        if(todoObj.done) count++
       }
     )
     return count
   }
   const doneCount=Count(todos)
   const total=todos.length

   return (
        
      <div className="todo-footer">
        <label>
            <input type="checkbox" onChange={(e)=>checkAllTodo(e.target.checked)}  checked={doneCount===total&&total!==0?true:false}/>
        </label>
        <span>
            <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={clearAllDone}>清除已完成任务</button>

      </div>
    )
}
