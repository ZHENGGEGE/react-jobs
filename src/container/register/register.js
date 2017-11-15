import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem,Button, WhiteSpace, WingBlank,Radio} from 'antd-mobile';


class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user : '',
            pwd : '',
            repeatpwd : '',
            type : 'genius'
        }
        this.handleRegister = this.handleRegister.bind(this)
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleRegister(){
        console.log(this.state)
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return(
            <div>
                <Logo></Logo>
                <WingBlank>
                <List>
                    <InputItem onChange={v => this.handleChange('user',v)}>用户名</InputItem>
                    <WhiteSpace />
                    <InputItem 
                        type="password"
                        onChange={v => this.handleChange('pwd',v)}
                        >密码</InputItem>
                    <WhiteSpace />
                    <InputItem 
                        type="password"
                        onChange={v => this.handleChange('repeatpwd',v)}
                        >确认密码</InputItem>
                    <RadioItem 
                        checked={this.state.type === 'genius'}
                        onChange={() => this.handleChange('type','genius')}
                        >
                        牛人
                    </RadioItem>
                    <RadioItem 
                        checked={this.state.type === 'boss'}
                        onChange={() => this.handleChange('type','boss')}
                        >
                        BOSS
                    </RadioItem>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.handleRegister}>注册</Button>
                </List>
                </WingBlank>
            </div>
        )
    }
}

export default Register