const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    // 默认会将 /maoyan当作请求路径的一部分
    // https://i.maoyan.com/maoyan/api/mmdb/movie/v3/list/hot.json?ct=郑州&ci=73&channelId=4
    // 参数一：代理名称 参数儿创建代理配置
    app.use('/maoyan',createProxyMiddleware({
        target:'https://i.maoyan.com',
        changeOrigin:true,
        pathRewrite:{
            '^/maoyan':''
        }
    }))
    app.use('/douyu',createProxyMiddleware({
        target:'https://m.douyu.com',
        changeOrigin:true,
        pathRewrite:{
            '^/douyu':''
        }
    }))
}