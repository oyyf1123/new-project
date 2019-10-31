import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import EcotopeTab from './EcotopeTab'
import EcotopeList from './EcotopeList'
const Shengtai = props =>{
    return (
        <div className='flex1 ecotope-box'>
            <span className = "share-btn"><i className='iconfont icon-location'></i> 分享</span>
            <div className = "ecotope-container-box">
                <EcotopeTab/>
                <EcotopeList/>
            </div>
            <ul className = "donation-box">
                <li className = "first">
                    <Link to='/zhuanzeng'>
                        <i className='iconfont icon-jiaoyi'></i>
                        <p>转赠</p>
                    </Link>
                </li>
                <li>
                    <Link to='/wishtree'> 
                        <i className='iconfont icon-huaban-'></i>
                        <p>许愿树</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default Shengtai