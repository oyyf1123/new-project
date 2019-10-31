import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators }from 'redux'
import {phone} from '../../actions'
const Teshe = props =>{
    console.log(props)
    return (
        <div className='flex1'>
            Teshe
            <Link to='/register'>注册</Link>
            {props.data}

        </div>
    )
}
export default connect((state)=>({data:state.register.phone}),dispatch=>bindActionCreators({phone},dispatch))(Teshe)