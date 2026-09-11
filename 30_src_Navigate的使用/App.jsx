import React from 'react'
import {Route,Routes,Navigate} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import MyNavLink from './components/MyNavLink'


export default function App() {

    return (
    <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
         </div>
       </div>
      <div className="row">
       <div className="col-xs-2 col-xs-offset-2">
         <div className="list-group">
          {/* 原生html中靠<a>跳转不同的页面 */}
           {/*<a className="list-group-item" href="./about.html">About</a>
           <a className="list-group-item active" href="./home.html">Home</a>*/}

           {/* 在React中靠路由链接实现切换组件  编写路由链接*/}
          
            <MyNavLink to='/about'>About</MyNavLink>
            <MyNavLink  to='/home'>Home</MyNavLink>
          
         </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
           <div className="panel-body">
            {/* 注册路由 */}
            <Routes>
               <Route path='/about' element={<About/>}/>
               <Route path='/home' element={<Home/>}/>
               
               {/* path="*" 捕获所有没匹配上的地址，进行重定向 */}
               <Route path="*" element={<Navigate to='/about' />}/>  
            </Routes>
               
           </div>
          </div>
        </div>
      </div>
    </div> 
    )

}
