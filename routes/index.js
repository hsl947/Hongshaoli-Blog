var express = require('express');
var router = express.Router();
var blog = require('../db/front')

router.get('/test', function(req, res, next) {
    res.send('test api ok!')
});

//文章列表数据
router.post('/list', function(req, res, next) {
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

//文章列表数据
router.post('/list/detail', function(req, res, next) {
    if (!req.body._id) {
        res.json({
            status: 100,
            message: '查询失败',
            data: {}
        })
        return;
    }
    blog.find(req.body, { description: 0, __v: 0 }).then(_data => {
        res.json({
            status: 200,
            message: '查询成功',
            data: _data[0]
        })
    }).catch(err => {
        console.log(err);
    });
});
var all = 0;
blog.count({}, (err, count) => { all = count; });

//admin文章列表数据
router.post('/admin/list', function(req, res, next) {
    let page = req.body.page;
    let skip = (page - 1) * req.body.limit;
    blog.find({}, { __v: 0 }).skip(skip).limit(+req.body.limit).then(_data => {
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

module.exports = router;