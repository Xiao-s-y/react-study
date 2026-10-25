import { useNavigate } from 'react-router-dom'
export default function About() {
  const navigate = useNavigate()
  return (
    <div className="app-wrap">
      <h1>About</h1>
      <p>这个页面用来练习路由跳转、useNavigate编程式导航</p>
      <button className="back-btn" onClick={()=>navigate('/')}>返回主页</button>
    </div>
  )
}
