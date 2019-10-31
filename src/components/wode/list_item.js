import React from 'react';
import { List } from 'antd-mobile';
import './index.scss'
const Item = List.Item;
class ListItem extends React.Component {
  state = {
    disabled: false,
  }

  render() {
    return (
    <div className = "list_item_wrap">
      <List >
        <Item
          arrow="horizontal"
          onClick={() => {  }}
        > 
         <i className="iconfont icon-jingwuicon_svg- icon "></i>
         &nbsp; &nbsp;
         <span> 我的生态树 </span>
        </Item>
        <Item
         
          onClick={() => {}}
          arrow="horizontal"
        >
          <i className="iconfont icon-changyongtubiao-mianxing- icon"></i>
           &nbsp; &nbsp;
          <span> 我的古树 </span>
        </Item>
        <Item
      
          arrow="horizontal"
          onClick={() => {}}
        > 
         <i className="iconfont icon-xinbaniconshangchuan- icon"></i>
         &nbsp; &nbsp;
          <span> 余额  </span>
        </Item>
        {/* 设置 */}
        <Item
          onClick={() => {
              this.props.history.push('/seting')
          }}
          arrow="horizontal"
        >
          <i className ="iconfont icon-shezhi1 icon"></i>
          &nbsp; &nbsp;
         <span>  设置 </span>
        </Item>

        <Item

          arrow="horizontal"
          onClick={() => {}}
        > 
         <i className ="iconfont icon-zaixiankefu icon"></i>
         &nbsp; &nbsp;
         <span> 在线客服  </span>
        </Item>
    
      </List>
     
    </div>)
  }
}

export default ListItem