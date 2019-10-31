import React from 'react' 
import { Checkbox } from 'antd-mobile'
const CheckboxItem = Checkbox.CheckboxItem
const DetailsTabBar = props => {
    return (
        <div className = "details-footer">
            <div className = "agreement-box">
                <CheckboxItem  >
                    
                </CheckboxItem>
                <div className = "agreement-content"> 您已阅读 <a> 《生态林认养协议》 </a> </div>
            </div>
            <div className = "claim-box">
                <div className = "service">
                    <i className = "iconfont icon-kefu"></i>
                    <span> 客服 </span>
                </div>
                <div className = "claim-btn">
                    <a> 我要认养 </a>
                </div>
            </div>
        </div>
    )
}
export default DetailsTabBar