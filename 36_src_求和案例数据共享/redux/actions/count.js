import {INCREMENT,DECREMENT} from '../constant'

export const createIncrementAction=(data)=>({type:INCREMENT,data})
export const createDecrementAction=(data)=>({type:DECREMENT,data})

// ✅异步action（返回函数！！）
//异步action，就是指action的值为函数,异步action中一般都会调用同步action
//异步 action：返回函数，函数里面可以写定时器、请求等异步代码；这个函数的参数就是dispatch，在异步回调里面再派发同步 action
export const createIncrementAsyncAction = (data,time)=>{
  // 返回一个函数，redux-thunk会自动调用这个函数，并且把dispatch传给它
  return (dispatch)=>{
    setTimeout(()=>{
      // 在异步里面，再派发【同步action】
      dispatch(createIncrementAction(data))
    },time)
  }
}