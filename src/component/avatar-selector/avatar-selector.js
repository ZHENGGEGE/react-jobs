import React from 'react'
import { Grid } from 'antd-mobile'


class AvatarSelector extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
                            .split(',')
                            .map(v => ({
                                icon : require(`../img/${v}.png`),
                                text : v
                            }))
        const gridHeader = this.state.icon?(<div>
                                                <span>已选择头像</span>
                                                <img src={this.state.icon} alt=""/>
                                            </div>):null
        return(
            <div>
                <Grid 
                    data={avatarList} 
                    columnNum={5}
                    onClick={elm => {
                        this.setState(elm)
                        this.props.selectAvatar(elm.text)
                    }}
                    />
                   头像选择
            </div>
        )
    }
}

export default AvatarSelector