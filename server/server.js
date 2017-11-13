const express = require('express')
const mongoose = require('mongoose')

//链接mongo 使用imooc这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'

mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})
//类似于mysql中的表,mongo中有文档和字段的概念
const User = mongoose.model('user',new mongoose.Schema({
    user : {type : String,require : true},
    age : {type : Number,require : true}
}))
// User.create({
//     user : 'xiaohua',
//     age : 24
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
// User.remove({age : 18},function(err,doc){
//     console.log(doc)
// })
User.update({user:'xiaoming'},{$set : {age:26}},function(err,doc){
    console.log(doc)
})

const app = express()

app.get('/',function(req,res){
    res.send('<h1>node app hello</h1>')
})
app.get('/data',function(req,res){
    User.findOne({user:'xiaoming'},function(err,doc){
        res.json(doc)
    })

})
app.listen(9093,function(){
    console.log('node listen port 9093')
})