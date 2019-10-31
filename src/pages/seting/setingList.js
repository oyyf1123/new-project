import React  from 'react'
import { List  ,NavBar, Icon} from 'antd-mobile';

const Item = List.Item;
class SetingList extends React.Component { 
  render() {
    
    return (<div className = 'wrap-box'>
        <div className ="personal-info">
        <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => { this.props.history.push('/home/wode') }}
        rightContent={[
        ]}
        >
        设置
      </NavBar>
        </div>

      <List className="my-list  list-box">
                <Item
                arrow="horizontal"
                multipleLine
                onClick={() => { this.props.history.push('/seting/cash_withdrawal') }}
                >
                提现资料
                </Item>
          
      
                <Item
                arrow="horizontal"
                multipleLine
                onClick={() => { this.props.history.push('/seting/tradepassword') }}
                >
                交易密码
                </Item>
        
                <Item
                arrow="horizontal"
                multipleLine
                onClick={() => { this.props.history.push('/seting/platform_protocol') }}
                >
                平台协议
                </Item>
                <Item
                arrow="horizontal"
                multipleLine
                onClick={() => { this.props.history.push('/seting/about_us') }}
                >
                关于我们
                </Item>

                <Item
                arrow="horizontal"
                multipleLine
                onClick={() => { this.props.history.push('/seting/feedback') }}
                >
                意见反馈
                </Item>
        
      </List>
   
    </div>);
  }
}

export default SetingList