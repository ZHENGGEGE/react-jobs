const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const Chat = model.getModel('chat')
const _filter = {'pwd':0,'__v':0}


Router.get('/list',function(req,res){
    const { type } = req.query
    User.find({type},function(err,doc){
        return res.json({code:0,data:doc})
    })
})
Router.get('/getmsglist',(req,res) => {
    const user = req.cookies.user
    //'$or':[{from:user,to:user}]
    Chat.find({},(err,doc) => {
        if(!err) {
            return res.json({code:0,msgs:doc})
        }
    })
})

Router.post('/update',function(req,res){
    const userid = req.cookies.userid
    if(!userid){
        return res.json({code : 1})
    }
    const body = req.body
    User.findByIdAndUpdate(userid,body,function(err,doc){
        const data = Object.assign({},{
            user:doc.user,
            type:doc.type
        },body)
        return res.json({code : 0,data})
    })
})

Router.post('/login',function(req,res){
    console.log(req.body)
    const {user,pwd} = req.body
    User.findOne({user:user,pwd : md5Pwd(pwd)},_filter,function(err,doc){
        if(!doc){
            return res.json({code :1,msg : '用户名或密码错误'})
        }
        res.cookie('userid',doc._id)
        return res.json({code : 0,data : doc})
    })

})

Router.post('/register',function(req,res){
    console.log(req.body)
    const {user,pwd,type} = req.body
    User.findOne({user},function(err,doc){
        if(doc){
            return res.json({code : 1,msg : '用户名重复'})
        }
        const userModel = new User({user,type,pwd:md5Pwd(pwd)})
        userModel.save(function(err,doc){
            if(err){
                return res.json({code : 1,msg : '后端出错了'})
            }
            const {user,type,_id} = doc
            res.cookie('userid',doc._id)
            return res.json({code : 0,data : {user,type,_id}})
        })
        //create并不能返回生成的id,create时拿不到生成的id,现在我们需要通过id  去设置cookie，所以更换为save
        // User.create({user,type,pwd:md5Pwd(pwd)},function(err,doc){
        //     if(err){
        //         return res.json({code : 1,msg : '后端出错了'})
        //     }
        //     return res.json({code : 0})
        // })
    })
})

Router.get('/info',function(req,res){
    const {userid} = req.cookies
    if(!userid){
        return res.json({code : 1})
    }
    User.findOne({_id:userid},_filter,function(err,doc){
        if(err){
            return res.json({code : 1,msg : '后端出错'})
        }
        if(doc){
            return res.json({code : 0,data : doc})
        }
    })
    //用户有没有cookie
    
})

function md5Pwd(pwd){
    const salt = 'zhengge_de_mimma234u23o=#$%#@#%'
    return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router