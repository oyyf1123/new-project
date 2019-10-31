import React, { useState } from 'react';
import { connect } from './hocDaily/withDaily'
import { Link } from 'react-router-dom';
import './mydaily.css';

const MyDaily = props => {
  let [flag, setFlag] = useState(true);
  return (
    <div className='mydaily_box'>
      {flag &&
        <div className = 'mydaily_list_box'>
          <ul>
          <li>
            <Link to = '/daily/dairycontent'>
              <div className= 'time_box'>
                  <span className ='yueri'>4.12</span>
                  <span className = 'nian'>2019</span>
              </div>
              <div className = 'content_box'>
                <p>阿善动阿萨德阿萨少尽快发货是大法官以微博发文UI访问IE发吧sad覅U盾上班分别是防守打法一碗饭东方红搜ID嗨购is等过会欧飞韩国工抵房还不够工地方规划供水管</p>
              </div>
            </Link>
            </li>
          </ul>
        </div>
         ||
        <div className='mydaily'>
        <img src="https://s2.ax1x.com/2019/10/30/K4Mwge.png" alt="" />
        <span>还没有写日记哦 ~</span>
        </div>
      }
      
    </div>
  );
}

export default connect(
  () => {
    return 'wode'
  }
)(MyDaily);