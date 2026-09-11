import React, { useState } from 'react'
import Search from './components/Search'
import List from './components/List'

export default function App() {
  //初始化状态
  const [user,setUser]=useState(
    {
      users:[], //user初始值为数组
      isFirst:true, //是否为第一次打开页面
      isLoading:false, //标识是否处于加载中
      err:'', //存储请求相关的错误信息
    }
  )

  //更新状态
  const updateUser=(stateObj)=>setUser(stateObj)

  return (
        <div className='container'>
          <Search updateUser={updateUser}/>
          <List user={user}/>
        </div>
    )
}
