import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Test from './pages/Test'

import MyNavLink from './components/MyNavLink'


export default class App extends Component {

  render() {
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
           {/* 通常情况下，path和component是一一对应的关系
           <Switch>组件用于包裹<Route>组件，以确保在匹配到第一个符合条件的路由后，停止继续匹配其他路由，从而提高性能和避免渲染不必要的组件。 */}
         
            <MyNavLink  to="/about">About</MyNavLink>
            <MyNavLink  to="/home">Home</MyNavLink>
           
         
          
         </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
           <div className="panel-body">
            {/* 注册路由 */}
            <Switch>
               <Route path='/about' component={About}/>
               <Route path='/home' component={Home}/>
               <Route path='/test' component={Test}/>
               <Redirect to="/about"/>
           
            </Switch>
               
           
           </div>
          </div>
        </div>
      </div>
    </div> 
    )
  }
}
