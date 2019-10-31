import React from 'react';
import { connect } from './hocDaily/withDaily';
import './write.css';
import { List, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import { Link } from 'react-router-dom'

const WriteComp = props => {
  const { getFieldProps } = props.form;
  return (
    <div className = 'write_box'>
      <div className = 'chicken_soup'>
        <p> 人生的酸甜苦辣，都在你的笔下 </p>
      </div>
      <div className = 'write_content'>
        <TextareaItem
            {...getFieldProps('count', {
              initialValue: '',
            })}
            rows={13}
            count={300}
          />
        </div>
      <div className='write_btn'>
        <Link to = '/daily'>
          <img className = 'write_btn_img' src ="https://s2.ax1x.com/2019/10/30/K4A3nK.png" alt ="" />
        </Link>
      </div>
    </div>
  );
}

const WriteComp1 = createForm()(WriteComp);
export default connect(
  () => {
    return 'xie'
  }
)(WriteComp1);