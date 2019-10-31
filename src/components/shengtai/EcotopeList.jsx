import React, { useState, useEffect } from 'react'
import EcotopeItem from './EcotopeItem'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getTreesList } from 'actions'
const EcotopeList = props => {
    useEffect(() => {
        props.getTreesList()
    },[])
    return (
        <div className="ecotope-list-box">
            <EcotopeItem />
        </div>
    )


}

export default connect(
    state => state.ecotopeReducer,
    dispatch => bindActionCreators({ getTreesList }, dispatch)
)(EcotopeList)



