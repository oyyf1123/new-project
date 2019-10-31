import React from 'react'
import './index.scss'
import { SearchBar} from 'antd-mobile';
import {Link} from 'react-router-dom'
class SearchUser extends React.Component {
    state = {
        value: '',
        list:[
            {
                id:1,
                name:'吉孟波徐',
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
        
        ],
        result:null,
        flag:false,
        flag1:false,
    };

    onChange = (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ 
            value: '', 
            flag:false,
            flag1:false, 
        });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    }
    search = (e)=>{
        if(e){
            const {list}=this.state
            let newList=[]
            list.forEach(item =>{
                if(item.name.includes(e)){
                   newList.push(item)
                }
            })
            if(newList.length!=0){
                this.setState({
                    flag:true,
                    flag1:true,
                    result:newList
                })
            }else{
                this.setState({
                    flag:false,
                    flag1:true,
                })
            }
        }
        else{
            this.setState({
                flag:false,
                flag1:false,
            })
        }
       
    }
    renderLitem = ()=>{
        const {result} = this.state

        return (
            result.map(item =>{

            return  (
                <div className='havefriend' key ={item.id}>
                    <div className='have_img'></div>
                    <div className='have_name'>{item.name}</div>
                    <div className='have_tel'>{item.telNum}</div>
                    <div className='have_icon'><i className='iconfont icon-youjiantou'></i></div>
                </div>
            )
            })
        )
    }
    render() {
        const {flag,flag1} =this.state 
        return (
            <div className='SearchUser'>
                <header>
                    <Link to='/wishtree'>
                    <i className='iconfont icon-icon1'></i>
                    </Link>
                    <p>好友查找</p>
                </header>

                <SearchBar
                    value={this.state.value}
                    placeholder="请输入好友昵称/手机号"
                    onSubmit={this.search}
                    onClear={this.clear}
                    onChange={this.onChange}
                />
                {flag1 &&( <div className='SearchUserList'>
                    {flag && this.renderLitem()||<div className='nofriend'>您没该好友</div>}
                </div>) }
               
            </div>
        )
    }
}
export default SearchUser