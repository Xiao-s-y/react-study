import React, { useEffect,useState } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default function List() {

  //初始化状态
    const [user,setUser]=useState(
      {
        users:[], //user初始值为数组
        isFirst:true, //是否为第一次打开页面
        isLoading:false, //标识是否处于加载中
        err:'', //存储请求相关的错误信息
      }
    )

    //消息订阅
    useEffect(()=>{
            let token=PubSub.subscribe('updateUser',(msg,stateObj)=>{setUser(stateObj)})
            return ()=>{
                PubSub.unsubscribe(token)
            }
    },[])


    return(
        <div className="row">
           {
            user.isFirst? <h2>欢迎使用，输入关键字，随后点击搜索</h2>:
            user.isLoading? <h2>Loading......</h2>:
            user.err?<h2 style={{color:'red'}}>{user.err}</h2>:
            user.users.map((userObj)=>{
                return (
                    <div key={userObj} className="card">
                        <a rel="noreferrer" href={userObj.html_url} target="_blank">
                            <img alt="head_portrait" src={userObj.avatar_url} style={{width:'100px'}}/>
                         </a>
                        <p className="card-text">{userObj.login}</p>
                    </div>
                )
            })
           }
        </div>      
    )
        
}
