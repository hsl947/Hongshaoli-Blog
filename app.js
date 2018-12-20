var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');

var app = express();
app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

/**
 * 设置应用路由
 */

app.use('/', routes);

app.listen(3030, (req, res) => {
    console.log('服务器运行于端口3030·····')
})