import React from 'react'
import { useRoutes } from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import routes from './routes/index'


export default function App() {
  const routesElement=useRoutes(routes)
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
            <MyNavLink to='/home'>Home</MyNavLink>
          
         </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
           <div className="panel-body">
             {/*  注册路由 */}
               {routesElement}
           </div>
          </div>
        </div>
      </div>
    </div> 
    )

}
