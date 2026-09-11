import React,{useRef} from 'react'
import axios from 'axios'

export default function Search({updateUser}) {
  // 创建ref绑定input
  const keyWordElement = useRef(null)

  const search=async()=>{
    const keyWord=keyWordElement.current.value
    //发送请求前通知App更新状态
    updateUser({isFirst:false,isLoading:true})
    try{
        const res = await axios.get(`/api/search/users?q=${keyWord}`)
        updateUser({isLoading: false,users: res.data.items})
    }catch(err){
        updateUser({isLoading: false,err: err.message})
    }
  }

  return (
      <div>
         <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索GitHub用户</h3>
                <div>
                    <input type="text" placeholder="输入关键词进行搜索" ref={keyWordElement}/>&nbsp;
                    <button onClick={search}>搜索</button>
                </div>
            </section>

      </div>
    )
}
