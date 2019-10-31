import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
const HomeTabbar = props => {
    return (
        <div className='home-tabbar'>
            <NavLink to='/home/shengtai'>
                <i className = "icon-zoology-trees">  </i>
                <p>生态林</p>
            </NavLink>
            <NavLink to='/home/gushu'>
                <i className = "icon-old-trees">  </i>
                <p>古树古林</p>
            </NavLink>
            <NavLink to='/home/teshe'>
                <i className = "icon-feature-trees">  </i>
                <p>特色认养</p>
            </NavLink>
            <NavLink to='/home/wode'>
                <i className = "icon-mine">  </i>
                <p>我的</p>
            </NavLink>
        </div >
    )
}
export default HomeTabbar
