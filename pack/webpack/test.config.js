const { staticPath } = require('../config.js');

module.exports = {
    mode: 'development',
    output: {
        path: staticPath,
        filename: '[name].[hash].js'
    },
    devtool: 'source-map',
    devServer: {
        proxy: {
            '/gw': {
                target: 'http://132.232.60.116:8000',
                changeOrigin: true,
                secure: false
            }
        }
    }
};
