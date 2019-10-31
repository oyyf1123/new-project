import React from 'react';
import { connect } from './hocDaily/withDaily';
import './dairycontent.css';

const DairyContent = props => {
  return (
    <div className = 'dairy_content_box'>
      <div className = 'dairy_content_time'>
        <span>2019.4.12</span>
        <span> 14:22:54 </span>
      </div>
      <div className = 'dairy_content_text'>
        <p>
          阿善动阿萨德阿萨少尽快发货是大法官以微博发文UI访问IE发吧sad覅U盾上班分别是防守打法一碗饭东方红搜ID嗨购is等过会欧飞韩国工抵房还不够工地方规划供水管
        </p>
      </div>
    </div>
  );
}

export default connect(
  () => {
    return 'wode'
  }
)(DairyContent);