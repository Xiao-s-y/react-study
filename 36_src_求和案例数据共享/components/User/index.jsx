import { nanoid } from 'nanoid'
import { useRef } from 'react'
import { userAction } from '../../redux/actions/user'
import { useDispatch, useSelector } from 'react-redux'


export default function Person() {

  const nameRef=useRef(null)
  const ageRef=useRef(null)
  const count=useSelector(state=>state.count)
  const persons=useSelector(state=>state.user)
  const dispatch=useDispatch()

  const addPerson=()=>{
    const name=nameRef.current.value
    const age=ageRef.current.value*1
    const personObj={id:nanoid(),name,age}
    dispatch(userAction(personObj))
    nameRef.value=''
    ageRef.value=''
  }

    return (
      <div>
        <h2>我是Person组件</h2>
        <h4>上方组件求和为{count}</h4>
        <input ref={nameRef} type="text" placeholder='输入名字' />
        <input ref={ageRef} type="text" placeholder='输入年龄' />
        <button onClick={addPerson}>添加</button>
        <ul>
            {
                persons.map(personObj=>{
                    return <li key={personObj.id}>{personObj.name}--{personObj.age}</li>
                })
            }
        </ul>
      </div>
    )
}