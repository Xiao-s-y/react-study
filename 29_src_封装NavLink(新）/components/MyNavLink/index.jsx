import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MyNavLink(props) {
  return (
     <NavLink className={({isActive})=>`list-group-item ${isActive ? 'atguigu' : ''}`}to="/about" {...props}/>
  )
}
