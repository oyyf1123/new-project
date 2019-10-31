import React, { useState,useEffect }from 'react'
import { Link } from 'react-router-dom'
const EcotopeTab = props => {
    
    return (
        <header className="ecotope-title-box">
            <div className="title-info">
                <h3> 生态林认养 </h3>
                <Link to = "/home/project_info"> 项目介绍 <i className="iconfont icon-jiantou">  </i> </Link>
            </div>
            <div className="area-box" id={"allmap"}>
                <a href = "#"> 区域 <i className="iconfont icon-jiantou_down"></i> </a>
            </div>
        </header>
    )
}
export default EcotopeTab