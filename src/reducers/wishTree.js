import {GET_FRIEND_LIST} from 'actions/actionType'
const initstate ={
    list :null
}

const wishTree = ( state = initstate ,action)=>{
    const newState ={
        ...state
    }
    switch(action.type){
        case GET_FRIEND_LIST:
            newState.list=action.payload
        break;
        default:
            break;
    }
    return newState
}
export default wishTree