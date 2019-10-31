import {PHONE} from '../actions/actionType'
const initState={
    phone:''
}
const register = (state=initState,actions) =>{
    const newState={
        ...state
    }
    if(actions.type=PHONE){
        newState.phone=actions.payload
    }
    return newState
}
export default register