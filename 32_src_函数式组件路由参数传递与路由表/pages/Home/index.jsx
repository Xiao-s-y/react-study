import React from 'react'
import { Outlet } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'


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
              <MyNavLink  to="news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink  to="message">Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
         {/*  <Routes>
            <Route path="news" element={<News/>}/>
            <Route path="message" element={<Message/>}/>
            <Route path="*" element={<Navigate to='news' />}/>
          </Routes> */}
          {/* 子路由News/Message就渲染在这里！ children 写在哪个路由对象，哪个路由的 element 组件里面放 Outlet*/}
            <Outlet />
         </div> 
      </div>
  )
}
