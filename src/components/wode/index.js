import React from 'react'
import {Link} from 'react-router-dom'
import ListItem from './list_item'
import Account from './account'
const Wode = props =>{
    return (
        <div className='flex1'>
             <Account {...props}/>
             <ListItem {...props}/>
        </div>
    )
}
export default Wode