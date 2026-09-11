import React, { useState } from 'react'
import {Link, Outlet,useNavigate} from 'react-router-dom' 


export default function Message() {
   const [msg,setMsg] =useState([
        {id:'01',title:'消息1'},
        {id:'02',title:'消息2'},
        {id:'03',title:'消息3'}
    ])

  const navigate=useNavigate()
  const back=()=>{
    navigate(-1)
  }
  const forward=()=>{
    navigate(1)
  }
  const go=()=>{
    navigate(-2)
  }

  const showReplace=(id,title)=>{
    navigate(`/home/message/detail/${id}/${title}`,{replace: true })
  }
  const showPush=(id,title)=>{
    navigate(`/home/message/detail/${id}/${title}`)
  }
 

  return (
       <div>
            <ul>
               { msg.map((msgObj)=>{
                    return(
                        <li key={msgObj.id}>
                           {/*  向路由传递prams参数 */}
                           <Link to={`detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; 
                            &nbsp;<button onClick={()=>showPush(msgObj.id,msgObj.title)}>push查看</button>
                            &nbsp;<button onClick={()=>showReplace(msgObj.id,msgObj.title)}>replace查看</button>


                           {/* 向路由传递search参数 */}
                           {/*  <Link to={`detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                          {/*  向路由传递state参数 */}
                           {/*  <Link  to="detail" state={{id:msgObj.id,title:msgObj.title}}>{msgObj.title}</Link>&nbsp;&nbsp;  */}
                        </li>
                    )
                })}
                
            </ul>
             <Outlet />
              <button onClick={back}>回退</button>&nbsp;
              <button onClick={forward}>前进</button>
              <button onClick={go}>go</button>
        </div>
    )
}
