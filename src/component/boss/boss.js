import React from 'react'
import axios from 'axios'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'



class Boss extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }
    componentDidMount(){
        axios.get('/user/list?type=genius').then((res) => {
            if(res.data.code===0){
                this.setState({
                    data : res.data.data
                })
            }
        })
    }
    render(){
        //console.log(this.state)
        const Header = Card.Header
        const Body = Card.Body
        return( 
            <WingBlank>
                <WhiteSpace></WhiteSpace>
                {this.state.data.map(v => {
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