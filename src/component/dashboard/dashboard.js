import React from 'react'
import { connect } from 'react-redux'
import { NavBar, Icon } from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'

function Boss(){
    return <div>boss</div>
}

function Genius(){
    return <div>Genius</div>
}
function Msg(){
    return <h2>Msg</h2>
}

function User(){
    return <h2>user</h2>
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
                component : Genius,
                hide : user.type =='genius'
            },
            {
                path : '/genius',
                text : 'Boss',
                icon : 'boss',
                title : 'BOSS列表',
                component : Boss,
                hide : user.type =='boss'
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
                <NavBar mode="dark">{navList.find(v => v.path==pathname).title}</NavBar>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>  
        )
    }
}


export default DashBoard