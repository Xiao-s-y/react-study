import React from 'react'
import './index.css'
import useUserStore from '../../store/store'

export default function List() {

  const isFirst=useUserStore(s=>s.isFirst)
  const isLoading=useUserStore(s=>s.isLoading)
  const err=useUserStore(s=>s.err)
  const users=useUserStore(s=>s.users)
  return ( 
     <div className="row">
           {
            isFirst? <h2>欢迎使用，输入关键字，随后点击搜索</h2>:
            isLoading? <h2>Loading......</h2>:
            err?<h2 style={{color:'red'}}>{err}</h2>:
            users.map((userObj)=>{
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
