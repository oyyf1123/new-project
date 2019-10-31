import React from 'react'
import { Link, Route, Switch,Redirect } from 'react-router-dom'
import './index.css'
import DailiyHome from './DailiyHome'
import WriteComp from './WriteComp'
import MyDaily from './Mydaily'
import DairyContent from './DairyContent'

const luyou = [
    {
        id:1,
        path: '/daily/dailyhome',
        component:DailiyHome,
    },
    {
        id:2,
        path: '/daily/dailywrite',
        component:WriteComp,
    },
    {
        id:3,
        path: '/daily/mydaily',
        component:MyDaily,
    },
    {
        id:4,
        path: '/daily/dairycontent',
        component:DairyContent,
    },
]
const Daily = props => {

    function renderItem () {
        return luyou.map( item => <Route key = { item.id } path = { item.path } component = { item.component }  exact />)
    }

    return (
        <Switch>
            <Redirect from = "/daily" to = "/daily/dailyhome" exact />
            { renderItem() }
        </Switch>
    )
}
export default Daily
//日记界面


