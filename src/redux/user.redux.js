import axios from 'axios'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERR_MSG = 'ERR_MSG'

const initState = {
    isAuth : false,
    msg : '',
    user : '',
    pwd : '',
    type : ''
}

//reducer
export function user(state =initState ,action){
    switch(action.type){
        case REGISTER_SUCCESS : 
            return { ...state,msg : '',isAuth : true,...action.payload }
        case ERR_MSG : 
            return { ...state,isAuth : false, msg:action.msg}
        default : 
            return state
    }
    
}

//actioncreater
function registerSuccess(data){
    return {
        type :REGISTER_SUCCESS,
        payload : data
     }
}

function errorMsg(msg){
    return { 
        msg,
        type:ERR_MSG 
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
                    dispatch(registerSuccess({user,pwd,type}))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
     }
     
}