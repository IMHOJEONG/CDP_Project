const { createProxyMiddleware }= require('http-proxy-middleware');

module.exports = function(app){
    // app.use(
    //     createProxyMiddleware('/api', {
    //         target: 'http://localhost:3002/api',
    //         changeOrigin: true
    //     })
    // );
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://openapi.data.go.kr',
            changeOrigin: true,
            pathRewrite: {
                '^/api/':'/'
            }
        })
    );
};

