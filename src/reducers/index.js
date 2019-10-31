import { combineReducers } from 'redux'
import wishTree from './wishTree'
import register from './register'
import ecotopeReducer from './home/treesList' //首页生态林列表数据获取
const rootReducers = combineReducers({
    wishTree, register, ecotopeReducer
})

export default rootReducers