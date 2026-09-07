//引入Count的UI组件
import CountUI from '../../components/Count'

//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action'


//a函数的返回值作为状态传递给UI组件的props
function mapStateToProps(state){
    return {count:state}
}

//b函数的返回值作为操作状态的方法传递给UI组件的props
function mapDispatchToProps(dispatch){
    return {
        jia:(number)=>dispatch(createIncrementAction(number)),
        jian:(number)=>dispatch(createDecrementAction(number)),
        jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
    }
}
//使用connect()()创建并暴露一个Count的容器组件
const CountContainer = connect(mapStateToProps,mapDispatchToProps)(CountUI)

export default CountContainer