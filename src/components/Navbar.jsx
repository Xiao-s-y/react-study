import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="nav-bar">
      <NavLink to="/">主页</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}
