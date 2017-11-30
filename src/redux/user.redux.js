import axios from 'axios'
import {getRedirectPath} from '../util'

const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERR_MSG = 'ERR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const LOGOUT = 'LOGOUT'

const initState = {
    redirectTo : '',
    msg : '',
    user : '',
    type : ''
}

//reducer
export function user(state =initState ,action){
    switch(action.type){
        case AUTH_SUCCESS : 
            return { ...state,msg : '',redirectTo:getRedirectPath(action.payload),...action.payload }
        case ERR_MSG : 
            return {...state,isAuth : false,msg:action.msg}
        case LOAD_DATA : 
            return {...state,...action.payload }
        case LOGOUT : 
            return {...initState,redirectTo:'/login'}
        default : 
            return state
    }
    
}

//actioncreater
function authSuccess(obj){
    const { pwd,...data } = obj
    return {
        type : AUTH_SUCCESS,
        payload : data
    }
}


function errorMsg(msg){
    return { 
        msg,
        type:ERR_MSG 
    }
}

export function loadData(userinfo){
    return {
        type : LOAD_DATA,
        payload : userinfo
    }  
    //是否登录
    //现在的url地址  login是不需要跳转的
    //用户的type  是boss还是牛人
    //用户是否完善信息   （选择头像，个人简介）
}

export function logoutSubmit(){
    return {
        type : LOGOUT
    }
}

export function update(data){
    return dispatch => {
        axios.post('/user/update',data).then(res => {
            if(res.status===200&&res.data.code===0){
                dispatch(authSuccess(res.data.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}


export function login({user,pwd}){
    if(!pwd||!user){
        return errorMsg('用户名密码必须输入')
    }
    return dispatch => {
        axios.post('/user/login',{user,pwd}).then(res => {
                if(res.status===200&&res.data.code===0){
                    dispatch(authSuccess(res.data.data))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
     }
}

export function register({user,type,pwd,repeatpwd}){
     if(!user||!pwd||!type){
         return errorMsg('用户名密码必须输入')
     }
     if(pwd!==repeatpwd){
        return errorMsg('密码和确认密码不同')
     }
     return dispatch => {
        axios.post('/user/register',{user,pwd,type}).then(res => {
                if(res.status===200&&res.data.code===0){
                    dispatch(authSuccess({user,pwd,type}))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
     }
     
}