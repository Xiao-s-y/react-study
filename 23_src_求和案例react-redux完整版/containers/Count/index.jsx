import React, { Component } from 'react'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/actions/count'

/* 定义UI组件 */
class Count extends Component {

  increment = () => {
    const {value}=this.selectNumber
    this.props.jia(value*1)
  
  }
  decrement = () => {
    const {value}=this.selectNumber
    this.props.jian(value*1)

  }
  incrementIfOdd = () => {
    const {value}=this.selectNumber
    if(this.props.count % 2 !== 0) {
      this.props.jia(value*1)
    }
  }
  incrementAsync = () => {
    const {value}=this.selectNumber
    this.props.jiaAsync(value*1,1000)
  }
  render() {
    return (
        <div>
            <h2>我是Count组件</h2>
            <h4>当前求和为{this.props.count} </h4>
            <h4>下方组件人数为{this.props.personCount} </h4>
            <select ref={c=>this.selectNumber=c}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>&nbsp;
            <button onClick={this.increment}>+</button>&nbsp;
            <button onClick={this.decrement}>-</button>&nbsp;
            <button onClick={this.incrementIfOdd}>当前就和为奇数再加</button>&nbsp;
            <button onClick={this.incrementAsync}>异步加</button>&nbsp;
        </div>
    )
  }
}


//mapStateToProps函数的返回值作为状态传递给UI组件的props
//映射状态


//mapDispatchToProps函数的返回值作为操作状态的方法传递给UI组件的props
//映射操作状态的方法
/* const mapDispatchToProps = (dispatch) => ({
        jia:(number)=>dispatch(createIncrementAction(number)),
        jian:(number)=>dispatch(createDecrementAction(number)),
        jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
}) */


//使用connect()()创建并暴露一个Count的容器组件
const CountContainer = connect(
    (state) => ({count:state.count,personCount:state.persons.length}),
    /*  mapDispatchToProps一般写法 */
   /*  (dispatch) => ({
        jia:(number)=>dispatch(createIncrementAction(number)),
        jian:(number)=>dispatch(createDecrementAction(number)),
        jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
    }) */

    /*  mapDispatchToProps简写*/
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction
    }
)(Count)

export default CountContainer