import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'


export default function App() {
  //初始化状态
  const [todos,setTodos]=useState([
    { id: nanoid(), name: '学习React', done: false },
    { id: nanoid(), name: '写todo案例', done: true }
  ]
  )

  //添加todo
  const addTodo=(todoObj)=>{
    //更新状态
    setTodos(prev=>[todoObj,...prev])
  }

  //更新todo
  const updateTodo=(id,done)=>{
    setTodos(prev=>prev.map(todoObj=>{
        if(todoObj.id===id){
        return {...todoObj,done}}
        else{
            return todoObj
        }
    }))
  }

  //删除todo
  const deleteTodo=(id)=>{
   setTodos(prev=>prev.filter(todoObj=>todoObj.id!==id))
  }

  //勾选全部
  const checkAllTodo=(done)=>{
    setTodos(prev=>prev.map(todoObj=>{
        return {...todoObj,done:done}
    }))
  }

  //清除完成的
  const clearAllDone=()=>{
    setTodos(prev=>prev.filter(todoObj=>{
        return !todoObj.done
    }))
  }


  return (
    <div className="todo-container">
     <div className="todo-warp">
        <Header addTodo={addTodo}/>
        <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        <Footer todos={todos} checkAllTodo={checkAllTodo} clearAllDone={clearAllDone}/>
     </div>
    </div>
        
  )
}
