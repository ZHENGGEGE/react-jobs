const express = require('express')
const mongoose = require('mongoose')

//链接mongo 使用imooc这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)



const app = express()

app.get('/',function(req,res){
    res.send('<h1>node app hello</h1>')
})

app.listen(9093,function(){
    console.log('node listen port 9093')
})