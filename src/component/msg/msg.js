import React from 'react'
import {connect} from 'react-redux'

@connect(
  state => state
)

export default class Msg extends React.Component{
  render(){
    console.log(this.props)
    //按照聊天用户分组，根据chatid
    const msgGroup = {}
    this.props.chat.chatmsg.forEach(v => {
      msgGroup[v.chatid] = msgGroup[v.chatid] || []
      msgGroup[v.chatid].push(v)
    });
    console.log(msgGroup)
    return(
      <div>
        <h2>消息列表</h2>
      </div>
    )
  }
}