import React from 'react';
import './index.css';
//  高阶组件是一个函数，接收一个组件作参数

export const connect = (fn) => {
  const obj = {
    wode: '我的记忆',
    shijian: '时间的记忆',
    xie: '写日记'
  }
  const key = fn()
  return (UiComponent) => {
    return class x extends React.Component{
      
      goBack = () => {
        this.props.history.go(-1)
      }

      render () {
        return (
          <div className='wrap-box'>
            <div className='tab'>
              <i className = 'fas fa-chevron-left'  onClick = {this.goBack}  style = {{color:'#fff'}}></i>
              <span className = 'title'> {obj[key]} </span>
            </div>
            <UiComponent style = {{flex:1}} {...this.props} />
          </div>
        )
      }
    }
  }
}