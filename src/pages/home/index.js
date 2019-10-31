import React from 'react'

import { Route, Redirect,Switch } from 'react-router-dom'

import './index.scss'
import HomeHeader from 'layout/home-header'
import HomeTabbar from 'layout/home-tabbar'
import Shengtai from 'comps/shengtai'
import ProjectInfo from 'comps/projectInfo'
import Gushu from 'comps/gushu'
import Teshe from 'comps/teshe'
import Wode from 'comps/wode'

const Home = props => {
    return (
        <div className='home'>
          <HomeHeader></HomeHeader>
            
            <Switch>
                <Redirect exact from='/home' to='/home/shengtai'></Redirect>
                <Route path='/home/shengtai' component={Shengtai}></Route>
                <Route path = '/home/project_info' component = { ProjectInfo }></Route>
                <Route path='/home/gushu' component={Gushu}></Route>
                <Route path='/home/teshe' component={Teshe}></Route>
                <Route path='/home/wode' component={Wode}></Route>
            </Switch>


          <HomeTabbar></HomeTabbar>
        </div>
    )
}
export default Home