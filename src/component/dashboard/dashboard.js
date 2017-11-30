import React from 'react'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'
import { Route,Switch } from 'react-router-dom'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'
import User from '../../component/user/user'


function Msg(){
    return <h2>Msg</h2>
}


@connect(
    state => state
)

class DashBoard extends  React.Component{  
    render(){
        const user = this.props.user
        const {pathname} = this.props.location
        const navList = [
            {
                path : '/boss',
                text : '牛人',
                icon : 'boss',
                title : '牛人列表',
                component : Boss,
                hide : user.type ==='genius'
            },
            {
                path : '/genius',
                text : 'Boss',
                icon : 'job',
                title : 'BOSS列表',
                component : Genius,
                hide : user.type ==='boss'
            },
            {
                path : '/msg',
                text : '消息',
                icon : 'msg',
                title : '消息列表',
                component : Msg
            },
            {
                path : '/me',
                text : '我',
                icon : 'user',
                title : '个人中心',
                component : User
            }
        ]
        return(
            <div>
                <NavBar mode="dark" className="fixed-header">{navList.find(v => v.path===pathname).title}</NavBar>
                <div>
                    <Switch>
                        {navList.map(v => (
                            <Route key={v.path} path={v.path} component={v.component}></Route>
                        ))}
                    </Switch>
                </div>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>  
        )
    }
}


export default DashBoard