import React from 'react'
import './index.css'

export default function List({user}) {
  return ( 
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
