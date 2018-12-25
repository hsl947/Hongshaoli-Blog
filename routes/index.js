var express = require('express');
var router = express.Router();
var blog = require('../db/front')

router.get('/test', function (req, res, next) {
    res.send('test api ok!')
});
router.post('/test', function (req, res, next) {
    let param = {};
    if (req.body._id){
        param._id = req.body._id;
    }
    blog.find(param).skip(+req.body.skip).limit(+req.body.limit).then(_data => {
        res.json({
            status: 200,
            message: '查询成功',
            data: _data,
            skip: req.body.skip,
            limit: req.body.limit
        })
    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;