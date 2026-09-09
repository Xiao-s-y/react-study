import React from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default function Search() {

  const  keyWordElement=React.createRef(null)
  
  const search=async()=>{
    const keyWord=keyWordElement.current.value
    //发送请求前通知List更新状态,发布消息
    PubSub.publish('updateUser',({isFirst:false,isLoading:true}))
    try{
        const res=await axios.get(`/api/search/users?q=${keyWord}`)
        //成功后更新状态
        PubSub.publish('updateUser',({users: res.data.items,isLoading:false}))
    }catch(err){
        PubSub.publish('updateUser',({isLoading: false,err: err.message}))
    }
  }

  return (
      <div>
         <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索GitHub用户</h3>
                <div>
                    <input type="text" placeholder="输入关键词进行搜索" ref={ keyWordElement}/>&nbsp;
                    <button onClick={search}>搜索</button>
                </div>
            </section>

      </div>
  )
}
