import React from 'react'
import {  Route, Redirect } from 'react-router-dom'
import SetingList from './setingList'
import { CashWithdrawal, TradePassword, Feedback ,AboutUs,PlatformProtocol } from './setingSub'

const luyou = [
      {
        id: 1,
        path: '/seting/cash_withdrawal',
        component: CashWithdrawal,
      },
      {
         id: 2,
         path: '/seting/tradepassword',
         component: TradePassword,
       },
       {
         id: 3,
         path: '/seting/about_us',
         component: AboutUs,
       },
       {
         id: 4,
         path: '/seting/platform_protocol',
         component: PlatformProtocol,
       },
       {
         id: 5,
         path: '/seting/feedback',
         component: Feedback,
       },
        {
            id:6,
            path:'/seting',
            component:SetingList,
        }
]
const Setings = props => {
    
    function renderItem(){
        return luyou.map(item => <Route key = {item.id} path = {item.path} component = {item.component}  exact />)
    }

    return (
    
        <div>
        
            {renderItem()}
            {/* <Route>
                <SetingList {...props} />
            </Route> */}
                
       </div>
        
    )
}
export default Setings