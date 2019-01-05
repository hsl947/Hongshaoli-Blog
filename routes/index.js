var express = require('express');
var router = express.Router();
var blog = require('../db/front').blog
var user = require('../db/front').user

router.get('/test', (req, res, next) => {
    res.send('test api ok!')
});

//文章列表数据
router.post('/list', (req, res, next) => {
    blog.find({}, { content: 0, __v: 0 }).skip(+req.body.skip).limit(+req.body.limit).then(_data => {
        res.json({
            status: 200,
            message: '查询成功',
            data: _data,
            count: _data.length,
            skip: +req.body.skip,
            limit: +req.body.limit
        })
    }).catch(err => {
        console.log(err);
    });
});

//文章详情
router.post('/list/detail', (req, res, next) => {
    if (!req.body._id) {
        res.json({
            status: 100,
            message: '查询失败',
            data: {}
        })
        return;
    }
    blog.find(req.body, { __v: 0 }).then(_data => {
        res.json({
            status: 200,
            message: '查询成功',
            data: _data[0]
        })
    }).catch(err => {
        console.log(err);
    });
});

//admin文章列表数据
router.post('/admin/list', (req, res, next) => {
    var all = 0;
    blog.count({}, (err, count) => { all = count; });
    let page = req.body.page;
    let skip = (page - 1) * req.body.limit;
    blog.find({}, { __v: 0, content: 0 }).skip(skip).limit(+req.body.limit).then(_data => {
        res.json({
            status: 200,
            message: '查询成功',
            data: _data,
            count: all,
            page: +page,
            limit: +req.body.limit
        })
    }).catch(err => {
        console.log(err);
    });
});

//admin文章添加
router.post('/admin/add', (req, res, next) => {
    var data = req.body;
    let Blog = new blog(data);
    Blog.save((err) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                status: 200,
                message: '添加成功'
            })
        }
    });
});

//admin文章编辑
router.post('/admin/edit', (req, res, next) => {
    var data = req.body;
    let target = { _id: data._id };
    blog.update(target, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                status: 200,
                message: '修改成功'
            })
        }
    });
});

//admin文章删除
router.post('/admin/delete', (req, res, next) => {
    var data = req.body;
    let target = { _id: data._id };
    blog.remove(target, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.json({
                status: 200,
                message: '删除成功'
            })
        }
    });
});

//admin后台登录
router.post('/admin/login', (req, res, next) => {
    var data = req.body;
    user.findOne(data).then(_data => {
        if (_data) {
            res.json({
                status: 200,
                message: '登录成功',
                data: {
                    token: _data.token
                }
            })
        } else {
            res.json({
                status: 100,
                message: '用户名或密码错误！'
            })
        }
    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;