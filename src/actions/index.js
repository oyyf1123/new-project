import { ADD, PHONE, GET_FRIEND_LIST, GET_TREES_LIST } from './actionType'

import request from 'utils/request'
import API from 'api'
export const getFriendList = () => {
    return async dispatch => {
        const result = await request({
            url: 'mock/friendList',
        })
        const action = {
            type: GET_FRIEND_LIST,
            payload: result
        }

        dispatch(action)
    }
}

export const add = () => {
    return {
        type: ADD
    }
}
export const phone = (val) => {
    return {
        type: PHONE,
        payload: val
    }
}

export const getTreesList = () => {
    return async dispatch => {
        const result = await request({
            url: API.treesList,
        })
        console.log(result)
        const action = {
            type: GET_TREES_LIST,
            payload: result
        }
        dispatch(action)
    }
}
