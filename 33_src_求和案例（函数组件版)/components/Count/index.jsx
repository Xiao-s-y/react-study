import React, { Component, createRef, useState } from 'react'

export default function Count (){
  const [count,setCount]=useState(0)
  const MyRef=createRef(null)

  const increment = () => {
    const value=MyRef.current.value
    setCount(prev=>prev+value*1)
  }
  const decrement = () => {
   const value=MyRef.current.value
    setCount(prev=>prev-value*1)
  }
  const incrementIfOdd = () => {
    if (count % 2 === 1) {
      increment()
    }
  }
  const incrementAsync = () => {
    setTimeout(() => {
      increment()
    }, 1000)
  }
    return (
        <div>
            <h1>当前求和为{count}</h1>
            <select ref={MyRef}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>&nbsp;
            <button onClick={increment}>+</button>&nbsp;
            <button onClick={decrement}>-</button>&nbsp;
            <button onClick={incrementIfOdd}>当前就和为奇数再加</button>&nbsp;
            <button onClick={incrementAsync}>异步加</button>&nbsp;
        </div>
    )

}
