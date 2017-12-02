import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/chartuser.redux'
import UserCard from '../usercard/usercard'


@connect(
    state => state.chartuser,
    { getUserList }
)

class Boss extends React.Component{
    componentDidMount(){
       this.props.getUserList('genius')
    }
    render(){
        return( 
            <UserCard userList={this.props.userList}></UserCard>
        )
    }
}



export default Boss