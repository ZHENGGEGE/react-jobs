const mongoose = require('mongoose')
//链接mongo 使用imooc这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/job-chart'
mongoose.connect(DB_URL)

const models = {
    user : {
        'user' : {type : String,require : true},
        'pwd' : {type : String,require : true},
        'type' : {type : String,require : true},
        //头像
        'avatar' : {type : String},
        //个人简介或职位简介
        'desc' : {type : String},
        //职位名
        'title' : {type : String},
        //如果你是boss
        'company' : {type : String,},
        'money' : {type : String}
    },
    chart : {

    }
}

for (let m in models){
    
}