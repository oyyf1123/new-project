import { GET_TREES_LIST } from 'actions/actionType'

const initState = {
    data: null
}

const ecotopeReducer = ( state = initState, action ) => {
    const newState = JSON.parse( JSON.stringify( state ) )
    switch ( action.type ) {
        case GET_TREES_LIST:
            console.log( 'reducer触发了' )
            break;

        default:
            break;
    }
    return newState
}
export default ecotopeReducer 

