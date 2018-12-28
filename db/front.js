const db = require('./db');
const Schema = db.Schema;

var listSchema = new Schema({
    title: { type: String },
    time: { type: Date },
    description: { type: String },
    content: { type: String }
});
var blogModel = db.model('Blog', listSchema);

// var _data = {
//     title: '标题'+(Math.random()*1000).toFixed(0),
//     time: new Date(),
//     description: '这是文章描述描述' + Math.random().toString(36).substr(2),
//     content: '这是文章内容' + Math.random().toString(36).substr(2)
// }

// blogModel.create(_data, function (err, res) { // 第一个参数规定为错误信息
//     console.log(err);
//     console.log(res);
// })

module.exports = blogModel;