import React from 'react'
import {Route,Routes,Navigate} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'

export default function Home() {
  return (
   <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
             {/*  <a className="list-group-item" href="./home-news.html">
                News
              </a> */}
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Routes>
            <Route path="news" element={<News/>}/>
            <Route path="message" element={<Message/>}/>
            <Route path="*" element={<Navigate to='news' />}/>
          </Routes>
         </div> 
      </div>
  )
}
