import './index.scss'
import React from 'react'
import { List , DatePicker ,Button ,NavBar, Icon} from 'antd-mobile';
// 引入选择时间的组件库
const Item = List.Item;

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
  // set the minDate to the 0 of maxDate
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}
class Information extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            date: now,
            time: now,     
        }
    }
    
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
       个人信息
      </NavBar>
        </div>
        {/* 头像个人信息 */}
        <List  className="my-list calendar-list header-pic" >
         <Item
          
          arrow="horizontal"
          multipleLine
          onClick={() => {}}
        >
           <span> 头像 </span>
          <img src= 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572427506526&di=0ef032b96d449baa03e5389af844acbd&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130702%2F10647690_161733352000_2.jpg'/>
        
        </Item>
      </List>

      <List className="my-list  list-box">

        <Item extra={'123456789'}> ID </Item>
        <Item
          arrow="horizontal"
          multipleLine
          onClick={() => {}}
          extra={'墨'}
        >
          昵称
        </Item>
        <Item extra={'18896961234'}> 手机号 </Item>
        <Item
          arrow="horizontal"
          multipleLine
          onClick={() => {}}
          extra={'去认证'}
        >
        实名认证
        </Item>
        <Item
          arrow="horizontal"
          multipleLine
          onClick={() => {}}
          extra={'女'}
        >
         性别
        </Item>
         {/* 生日 */}
         <DatePicker
          mode="date"
          title="出生日期"
          extra="Optional"
          value={this.state.date}
          onChange={date => this.setState({ date })}
        >
          <List.Item arrow="horizontal"> 生日 </List.Item>
        </DatePicker>
        
        {/* <Item extra={'extra content'}> 收货地址 </Item> */}
      </List>
   
    {/*  退出登录部分  */}
    <Button className = "exit" onClick = { ()=>{ this.props.history.push('/register') } }> 退出登录  </Button>
    </div>);
  }
}

export default Information

