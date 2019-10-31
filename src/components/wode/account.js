import React from 'react';
import { List } from 'antd-mobile';
import './account.scss'
const Item = List.Item;
class Account extends React.Component {
  state = {
    disabled: false,
  }

  render() {
    return (<div className = "account" >
     
   
     <List >
        <Item
          thumb="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3266660523,235777054&fm=15&gp=0.jpg"
          arrow="horizontal"
          onClick={() => { this.props.history.push('/mine')  }}
        >  溺水的鱼 </Item>

      </List>
     
    </div>)
  }
}

export default Account