import { legacy_createStore as createStore ,applyMiddleware,combineReducers} from "redux";
//引入为Count组件服务的reducer
import countReducer from './reucers/count'
//引入为Person组件服务的reducer
import personReducer from "./reucers/person";
//引入redux-thunk，用于支持异步action
import {thunk} from 'redux-thunk'

//汇总所有reducer，变为一个总的reducer
const allReducer=combineReducers({
    he:countReducer,
    rens:personReducer
})

export default createStore(allReducer, applyMiddleware(thunk))