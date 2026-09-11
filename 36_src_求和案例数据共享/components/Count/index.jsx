import  { createRef} from 'react'
// 引入react-redux的两个hook
import { useSelector, useDispatch } from 'react-redux'
import store from '../../redux/store'
//引入actionCreator
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/actions/count'



export default function Count (){
  const MyRef=createRef(null)

  // ✅ useSelector：读取redux仓库state，自动订阅
  // 参数：回调函数，入参就是仓库完整state，return你要的数据
  const count = useSelector(state => state.count)
  const persons=useSelector(state=>state.user)

  // ✅ useDispatch：拿到dispatch函数，用来派发action
  const dispatch = useDispatch()

  const increment = () => {
    const value=MyRef.current.value
    dispatch(createIncrementAction(value*1))
  }
  const decrement = () => {
   const value=MyRef.current.value
  dispatch(createDecrementAction(value*1))
  }
  const incrementIfOdd = () => {
    if (count%2 === 1) {
      increment()
    }
  }
  const incrementAsync = () => {
    const value=MyRef.current.value
    dispatch(createIncrementAsyncAction(value*1,1000))
  }
    return (
        <div>
            <h2>我是Count组件</h2>
            <h4>当前求和为{count} </h4>
            <h4>下方组件人数为{persons.length} </h4>
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
