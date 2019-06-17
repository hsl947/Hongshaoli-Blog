/*
* @Author: Hong
* @Date:   2018-12-03 11:26:53
* @Last Modified by:   Hong
* @Last Modified time: 2018-12-13 16:41:25
*/

//prerender-spa-plugin
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');

module.exports = {
  baseUrl: "./", // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
  outputDir: "dist", // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  assetsDir: "public", //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
  indexPath: "index.html", //指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
  pages: {
    //pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
    index: {
      //除了 entry 之外都是可选的
      entry: "src/main.js", // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
      template: "public/index.html", // 模板来源
      filename: "index.html", // 在 dist/index.html 的输出
      title: "Index Page", // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
      chunks: ["chunk-vendors", "chunk-common", "index"] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
    }
  },
  lintOnSave: false, // 是否在保存的时候检查
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps
    loaderOptions: {}, // css预设器配置项
    modules: false // 启用 CSS modules for all css / pre-processor files.
  },
  // /*
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets', // @ is an alias to /src
        'components': '@/components',
        'views': '@/views',
      }
    },
  },
  // */
  //prerender-spa-plugin
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production';
      return {
        resolve: {
          alias: {
            'assets': '@/assets', // @ is an alias to /src
            'components': '@/components',
            'views': '@/views',
          }
        }
        /*
        ,plugins: [
          new PrerenderSPAPlugin({
            // 生成文件的路径，也可以与webpakc打包的一致。
            // 下面这句话非常重要！！！
            // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
            staticDir: path.join(__dirname, 'dist'),
            // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
            routes: ['/', '/detail'],
            // 这个很重要，如果没有配置这段，也不会进行预编译
            renderer: new Renderer({
              inject: {
                foo: 'bar'
              },
              headless: false,
              // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
              renderAfterDocumentEvent: 'render-event'
            })
          }),
        ]
        */
      }
    } else {
      // 为开发环境修改配置...
      config.mode = 'development';
    }
  },
  //反向代理
  devServer: {
    // 环境配置
    // host: '127.0.0.1',
    port: 8088,
    https: false,
    hotOnly: false,
    open: true, //配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'http://localhost:3030',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  pluginOptions: {
    // 第三方插件配置
    // ...
  }
};
