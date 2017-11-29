import React from 'react'
import axios from 'axios'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/chartuser.redux'


@connect(
    state => state.chartuser,
    { getUserList }
)

class Boss extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }
    componentDidMount(){
       this.props.getUserList('genius')
    }
    render(){
        const Header = Card.Header
        const Body = Card.Body
        return( 
            <WingBlank>
                <WhiteSpace></WhiteSpace>
                {this.props.userList.map(v => {
                    return v.avatar?(<Card key={v._id}>
                        <Header 
                            title={v.user}
                            thumb={require(`../img/${v.avatar}.png`)}  
                            extra={<span>{v.title}</span>}
                        ></Header>
                        <Body>
                            {v.desc.split('\n').map(v => (
                                <div key={v}>{v}</div>
                            ))}
                        </Body>
                    </Card>):null
                })}
            </WingBlank>
        )
    }
}


export default Boss