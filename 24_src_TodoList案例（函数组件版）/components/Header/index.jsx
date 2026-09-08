import React from 'react'
import { nanoid } from 'nanoid'
import './index.css'


export default function Header({todos,addTodo}) {
  const handleKeyUp=(e)=>{
    //解构赋值获取keyCode,targe
    const {key,target}=e
    if(key!=='Enter') return
    if(target.value.trim()==='') return alert("输入不能为空")
    const newTodo = {
      id:nanoid(),
      name:target.value,
      done:false
    }
    addTodo(newTodo)
    target.value=''
  }
  return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={handleKeyUp}/>
      </div>
    )
}
