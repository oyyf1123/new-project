import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getFriendList } from 'actions/index'
import './index.scss'
class FriendList extends React.Component{
    state={
        list:[
            {
                id:1,
                name:'吉孟波',
                treeNum:1,
                eneryNum:200,
                telNum:111
            },
            {
                id:2,
                name:'魏仲',
                treeNum:1,
                eneryNum:30,
                telNum:111
            },
            {
                id:3,
                name:'徐晶垚',
                treeNum:1,
                eneryNum:500,
                telNum:111
            },
            {
                id:4,
                name:'欧阳逸峰',
                treeNum:1,
                eneryNum:2500,
                telNum:111
            },
            {
                id:5,
                name:'吕姝雅',
                treeNum:1,
                eneryNum:10,
                telNum:111
            },
            {
                id:6,
                name:'刘永豪',
                treeNum:1,
                eneryNum:1500,
                telNum:111
            },
        
        ]
    }

    sortList=()=>{
        const {list} = this.state
        let newList =[]
        let index=1
        list.sort(function(a,b){
            return b.eneryNum-a.eneryNum
        })
        list.map(item=>{
            newList.push({
                index:index,
                content:item
            })
            index++
        })
        
        let name = localStorage.getItem('name')
      let obj=  newList.filter(item=>{
            if(item.content.name==name){
                return item
            }
        })

        newList.splice(obj[0].index-1,1)
        newList.unshift(obj[0])
        return newList
    }

    renderList=()=>{
       let list= this.sortList()
        return(
          list.map(item=>{
          return ( <div className='item' key ={item.content.id}>
                <div className='topNum'>{item.index}</div>
                <div className='headerImg'></div>
                <div className='username'>
                    <div >{item.content.name}</div>
                    <p>认领了{item.content.treeNum}棵树</p>
                </div>
                <div className='enery'>{item.content.eneryNum}能量</div>
                <span className='TA_wish'>查看TA的愿望</span>
            </div>)
          })
        )
    }

    render(){
        return(

        <div className='friendlist'>
            <div className='header'>
                <p>排行榜</p>
                <Link to='/search_user' className='find_friend'></Link>
            </div>
            <div className='lists'> 
                {this.renderList()}
            </div>
        </div>
        )
    }
}
export default connect(
    state => {return ({data:state.wishTree})},
    dispatch => bindActionCreators({ getFriendList },dispatch)
  )(FriendList) 