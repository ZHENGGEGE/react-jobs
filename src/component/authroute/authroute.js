import React from 'react'
import axios from 'axios'

class AuthRoute extends React.Component{
    componentDidMount(){
        //获取用户信息
        axios.get('/user/info')
        //是否登录
        //现在的url地址  login是不需要跳转的
        //用户的type  是boss还是牛人
        //用户是否完善信息   （选择头像，个人简介）
    }
}