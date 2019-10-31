import React from 'react'
import './index.scss'
import { List, InputItem, Toast,Checkbox,Button } from 'antd-mobile';
import {connect} from 'react-redux'
import { bindActionCreators }from 'redux'
import {phone} from '../../actions'


const AgreeItem = Checkbox.AgreeItem;
class Register extends React.Component {
    state = {
        hasError: false,
        phoneValue: '',
        yanValue:'',
        checkFlag:'',
        buttonFlag:false
      }
      onErrorClick = () => {
        if (this.state.hasError) {
          Toast.info('请输入11位手机号');
        }
      }
      onPhoneChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
          this.setState({
            hasError: true,
          });
        } else {
          this.setState({
            hasError: false,
          });
        }
        this.setState({
            phoneValue:value,
        });
      }
      onYanChange = (val) => {
        this.setState({
            yanValue:val,
        });
      }
      onCheckChange = (val) => {
        this.setState({
            checkFlag:val
        })
      }
      submit = () => {
        const {checkFlag,phoneValue,yanValue} = this.state
        if(checkFlag && phoneValue && yanValue){
            this.props.history.push('/home')
            this.props.phone(this.state.phoneValue)
        }
        if(!checkFlag){
            Toast.info('请先同意注册协议', 2, null, false);
        }
        if(!phoneValue){
            Toast.info('手机号码不能为空', 2, null, false);
        }
        if(!yanValue){
            Toast.info('请输入验证码', 2, null, false);
        }
        
      }

      onButtonClick=()=>{
        let num=30
        const button =document.querySelector('#sendYan')
        this.setState({
            buttonFlag:true
        })
        const timer=setInterval(() => {
            if(num>1){
                num--
                button.innerHTML=num+'秒'
            }else{
                clearInterval(timer)
                this.setState({
                    buttonFlag:false
                })
                button.innerHTML='获取验证码'

            }
        }, 1000);
      }
    render () {
        return (
            <div id="register-box">
             <h2 > 登录/注册</h2>
             <p >欢迎来到我爱我树</p>
             <List id="phone-box">
                <InputItem
                    type="phone"
                    placeholder="输入手机号"
                    error={this.state.hasError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.onPhoneChange}
                    value={this.state.phoneValue}
                >
                    <img src="https://s2.ax1x.com/2019/10/30/Kh4WlV.png" alt="" />
                </InputItem>
            </List>
            <List id="yan-box">
                <InputItem
                    type="phone"
                    placeholder="输入验证码"
                    error={this.state.hasError}
                    onChange={this.onYanChange}
                    onErrorClick={this.onErrorClick}
                    value={this.state.yanValue}
                >
                    <img src="https://s2.ax1x.com/2019/10/30/Kh5Kts.png" alt="" />
                </InputItem>
                <Button id="sendYan" disabled={this.state.buttonFlag} onClick={this.onButtonClick}>获取验证码</Button>
            </List>
            <AgreeItem data-seed="logId" onChange={e => {this.onCheckChange(e.target.checked)}}>
            确定即代表您同意 <a onClick={(e) => { e.preventDefault(); alert('agree it'); }}
                style={{color:'#0fa87d'}}
            >《用户注册协议》</a>
          </AgreeItem>

          <div onClick={this.submit} id="submit">确定</div>
          <p id="login-text">第三方登录</p>
          <div id="third-login">
              <p>
                <a>
                    <img src="https://s2.ax1x.com/2019/10/30/K4SW5t.png" />
                </a>
                <a>
                    <img src="https://s2.ax1x.com/2019/10/30/K49ap6.png" />
                </a>
                <a>
                    <img src="https://s2.ax1x.com/2019/10/30/K49d1K.png" />
                </a>
              </p>
          </div>

                
            </div>
        )
    }
}


export default connect((state)=>({phone:state.register.phone}),dispatch=>bindActionCreators({phone},dispatch))(Register)
