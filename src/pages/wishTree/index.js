//许愿树主页面

import React from 'react'
import { Link } from 'react-router-dom'
import KinerGuide from 'comps/KinerGuide/KinerGuide';

import WishTreeHeader from 'layout/wishTree-header'
import './index.scss'
import FriendList from 'comps/friendList';
import BScroll from 'better-scroll'
class WishTree extends React.Component {
    //step2. 定义操作指引信息对象
    guideList = [
        { position: 'bottom', text: "点这里可以返回生态林", offset: 15 },
        { position: 'bottom', text: "点这里可以签到领能量", offset: 15 },
        { position: 'bottom', text: "点这里可以许愿", offset: 15 },
        { position: 'bottom', text: "点这里可以写日记", offset: 15 },
    ];

    constructor(props) {
        super(props);
        //step3. 初始化操作变量
        this.state = {
            disabled: true,//忽略，与本组件无关
            isShowGuide: true,//是否显示操作指引，通过控制此开关便可显示和隐藏操作指引
            guideStep: 0,//当前操作指引的步骤
            flag: false
        };
    }

    componentDidMount() {
        //step4. 在页面准备完毕时显示操作指引
        let key = localStorage.getItem('key')//控制是否显示指引
        //已经有key，就关闭；没有就开启并设置key标识
        if (key === 'show') {
            this.setState({
                isShowGuide: false//当页面加载成功或者是如果操作指引依赖于某些异步操作，如axios请求等，则可在请求成功之后让操作指引显示
            });
        } else {
            localStorage.setItem('key', 'show')
            this.setState({
                isShowGuide: true//当页面加载成功或者是如果操作指引依赖于某些异步操作，如axios请求等，则可在请求成功之后让操作指引显示
            });
        }
        setTimeout(function(){
            new BScroll('.wishtree',{
                click:true,
                bounce: false
            })
        },0)
    }


    render() {

        return (
            <div className='wishtree'>
                <div className='treebox'>

                    <WishTreeHeader></WishTreeHeader>
                    <div className='container' ref='guideBox' >
                        {/* 返回生态林页面按钮 */}
                        <Link to='/home/shengtai' ref='guideTarget0' className='guideTarget0'></Link>

                        {/* 许愿树图片容器 */}
                        <div className='tree'></div>
                        {/* 签到、许愿、日记容器 */}
                        <div className='entry'>
                            <span ref='guideTarget1' className='guideTarget1'></span>
                            <Link to='/wish' ref='guideTarget2' className='guideTarget2'></Link>
                            <Link to='/daily' ref='guideTarget3' className='guideTarget3'></Link>
                        </div>

                        <KinerGuide
                            visible={this.state.isShowGuide}
                            guideBox={this.refs.guideBox}
                            target={this.refs[`guideTarget${this.state.guideStep}`]}
                            type={this.guideList[this.state.guideStep].type}
                            offset={this.guideList[this.state.guideStep].offset}
                            offsetX={this.guideList[this.state.guideStep].offsetX}
                            offsetY={this.guideList[this.state.guideStep].offsetY}
                            guidePosition={this.guideList[this.state.guideStep].position}
                        >
                            {/* 操作指引提示框框，可在此处自定义添加代码实现业务逻辑 */}
                            <div className="guide-container">
                                <h1 className="title">{this.guideList[this.state.guideStep].text}</h1>
                                <div className="btn" onClick={e => {
                                    if (this.state.guideStep !== this.guideList.length - 1) {
                                        let { guideStep } = this.state;
                                        this.setState({
                                            guideStep: ++guideStep
                                        });
                                    } else {
                                        this.setState({
                                            isShowGuide: false
                                        });
                                    }

                                }}>{this.state.guideStep !== this.guideList.length - 1 ? '下一步' : '知道了'}</div>
                            </div>
                        </KinerGuide>

                        <div className='FriendList'>
                            <FriendList></FriendList>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default WishTree
