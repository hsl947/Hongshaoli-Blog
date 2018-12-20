var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function (req, res, next) {
//     res.render('index', { title: 'Express' });
// });
router.post('/test', function (req, res, next) {
    res.json({ id: 1, name: "张三" })
});

module.exports = router;