import React, { Component } from 'react'
import './index.scss'
import DetailsTab from './DetailsTab'
import DetailsTabBar from './DetailsTabBar'
import DetailsContainer from './DetailsContainer'
import BScroll from 'better-scroll'
class Details extends Component {
    
    componentDidMount () {
        setTimeout (() => {
            new BScroll('.details-container',{
                click:true
            })
        },0)
    }
    render() {
        return (
            <div className = "details-box">
                <DetailsTab { ...this.props }/>
                <DetailsContainer/>
                <DetailsTabBar/>
            </div>
        )
    }
}

export default Details