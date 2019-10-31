
import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from 'pages/home'
import WishTree from 'pages/wishTree'
import Mine from 'pages/mine'
import Daily from 'pages/daily'
import Zhuanzeng from 'pages/zhuanzeng'
import Details from 'pages/details'
import Register from './pages/register'
import Seting from 'pages/seting'
import SearchUser from 'pages/searchUser/index.jsx'
import Wish from 'pages/wish/index.jsx'


const RouterComp = props => {
    const [routes] = useState([
        {
            id: 1,
            path: '/home',
            component: Home,
        },
        {
            id: 2,
            path: '/wishtree',
            component: WishTree,
        },
        {
            id: 3,
            path: '/mine',
            component: Mine,
        },
        {
            id: 4,
            path: '/daily',
            component: Daily,
        },
        {
            id: 5,
            path: '/zhuanzeng',
            component: Zhuanzeng,
        },
        {
            id: 6,
            path: '/register',
            component: Register,
        },
        {
            id: 40,
            path: '/seting',
            component: Seting,
          },
        {
            id: 51,
            path: '/details',
            component: Details
        },
        {
          id:71,
          path:'/search_user',
          component:SearchUser
      },
      {
        id: 101,
        path: '/wish',
        component:Wish,
      }
    ])

    function renderRoutes () {
        return routes.map(item => <Route key={item.id} path={item.path} component={item.component} exact={item.exact} />)
    }
    return (
        <Switch>
            <Redirect from="/" to="/home" exact />
            {renderRoutes()}
        </Switch>
    )


    }
    
    export default RouterComp

