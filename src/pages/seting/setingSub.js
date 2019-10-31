import React from 'react'
import './index.scss'

import { NavBar, Icon ,List} from 'antd-mobile';
const Item = List.Item;
// 提现资料组件
export const CashWithdrawal = ( props)=>{
   return ( 
       <div>
             <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => { props.history.push('/seting') }}
                >
                 提现资料
                </NavBar>
          
       </div>
   )
}
// 交易密码组件
export const TradePassword = ( props)=>{
    return ( 
        <div>
           <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => { props.history.push('/seting') }}
                >
                 交易密码
                </NavBar>
        </div>
    )
 }
 //关于我们组件
 export const AboutUs = ( props )=>{
    return ( 
             <div className = "about-us-box">
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => { props.history.push('/seting') }}
                >
                关于我们
                </NavBar>
                <div className = "tree-box ">
                    <img src = "https://s2.ax1x.com/2019/10/30/K4OBSe.png"/>
                    <p> 我爱我树v1.0.3</p>
                </div>
                <div className = "tree-introduce-box">
                    我爱我树网络科技有限公司，是国内一家专注林业数字化服务平台，基于我国“生态优先，
                    绿色发展的社会理念”，联合安徽省池州市林业创办【生态林】和【古树认养】两个项目，
                    通过互联网模式提升林业的综合效益。
                </div>
        </div>
    )
 }
// 平台协议组件
export const PlatformProtocol = ( props)=>{
    return ( 
        <div>
              <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => { props.history.push('/seting') }}
                >
                平台协议
                </NavBar>
                <Item
                arrow="horizontal"
                multipleLine
                onClick={() => {}}
                >
                用户注册协议
                </Item>
                <Item
                arrow="horizontal"
                multipleLine
                onClick={() => {}}
                >
                生态林认养协议
                </Item>
                <Item
                arrow="horizontal"
                multipleLine
                onClick={() => {  }}
                >
                古树名木认养协议
                </Item>

        </div>
    )
 }
//  意见反馈组件
export const Feedback = ( props)=>{
    return ( 
        <div>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => { props.history.push('/seting') }}
                >
               意见反馈
                </NavBar>
        </div>
    )
 }
 

