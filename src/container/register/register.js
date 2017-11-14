import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem,Button, WhiteSpace, WingBlank,Radio} from 'antd-mobile';


class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            type : "genius"
        }
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return(
            <div>
                <Logo></Logo>
                <WingBlank>
                <List>
                    <InputItem>用户名</InputItem>
                    <WhiteSpace />
                    <InputItem>密码</InputItem>
                    <WhiteSpace />
                    <InputItem>确认密码</InputItem>
                </List>
                <RadioItem checked={this.state.type === 'genius'}>
                    牛人
                </RadioItem>
                <RadioItem>
                    BOSS
                </RadioItem>
                <WhiteSpace />
                <Button type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register