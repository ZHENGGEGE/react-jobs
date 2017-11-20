import React from 'react'
import { Grid } from 'antd-mobile'


class AvatarSelector extends React.Component{
    render(){
        const avatarList = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'
                            .split(',')
                            .map(v => ({
                                icon : require(`../img/${v}.png`),
                                text : v
                            }))
        return(
            <div>
                <Grid data={avatarList}/>
               头像选择
            </div>
        )
    }
}

export default AvatarSelector