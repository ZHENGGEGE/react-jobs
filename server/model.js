const mongoose = require('mongoose')
//链接mongo 使用imooc这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/job-chart'
mongoose.connect(DB_URL)