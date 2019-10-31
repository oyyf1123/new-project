import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from './hocDaily/withDaily'
import './index.css'

const luyou = [
    {
        id:1,
        path: '/daily/dailywrite',
    },
    {
        id:2,
        path: '/daily/mydaily',
    },
]
const DailiyHome = props => {
    return (
        <div className = 'wode'>
            <div className='wode_text'>
                <div className = 'null'></div>
                <div className = 'null'></div>
                <p>你来或者不来，我都在静静地等你</p>
           </div>
            <div className='wode_img'>
                <div className='img'>
                    <img className='img_img' src="https://s2.ax1x.com/2019/10/30/Kh5Dc6.png" alt="" />
                </div>
           </div>
            <div className = 'wode_btn'>
                    <div className = 'null'></div>
                <Link className='img1' to = {luyou[0].path} >
                    <img className='btn_img' src="https://s2.ax1x.com/2019/10/30/KhoLpn.md.png" alt=""/>
                </Link>
           </div>
            <div className='wode_history'>
                <div className='null'></div>
                <Link className = 'img2' to ={luyou[1].path} >
                    <i className = 'fas fa-book'></i>
                    <span>我的记忆</span>
                </Link>
           </div>
        </div>
    )
}
export default connect(
    ()=>{return 'shijian'}
)(DailiyHome)
//日记界面



