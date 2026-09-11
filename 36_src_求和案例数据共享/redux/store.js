import { legacy_createStore as createStore ,applyMiddleware,combineReducers} from "redux";
import countReducer from './reducers/count'
import personReducer from './reducers/user'
import {thunk} from 'redux-thunk'
//引入redux-thunk，用于支持异步action


// 合并reducer！！
const allReducer = combineReducers({
  count: countReducer,   // key:count  对应countReducer
  user: personReducer      // key:user   对应personReducer
})

export default createStore(allReducer, applyMiddleware(thunk))