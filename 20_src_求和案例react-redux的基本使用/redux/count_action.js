import {INCREMENT,DECREMENT} from './constant'


//同步actin,就是指actin的值为Object类型的一般对象
export const createIncrementAction=(data)=>({type:INCREMENT,data})
export const createDecrementAction=(data)=>({type:DECREMENT,data})

//异步action，就是指action的值为函数,异步action中一般都会调用同步action
export const createIncrementAsyncAction=(data,time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}