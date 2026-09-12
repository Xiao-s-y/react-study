import React from 'react'
import { useStore } from '../store/store'

export default function Count() {
  const count=useStore(s=>s.count)
  const increment=useStore(s=>s.increment)
  const decrement=useStore(s=>s.decrement)
  return (
    <div>
        <span>运算结果为{count}</span>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
    </div>
  )
}
