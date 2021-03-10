const path = require('path');
const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'Tetris',
    mode: 'development', // 실서비스 : production
    devtool: 'eval',
    resolve: {
        extensions: ['.js','.jsx']
    },
    entry: {
        app: ['./client.jsx'],
    }, //입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-env',{
                    targets: {
                        browsers: ['> 1% in KR'],
                    },
                    debug: true,
                }], '@babel/preset-react'],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ]
            }
        }],
    },
    plugins:[
        new webpackPlugin()
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    }, //출력

    devServer: {
        publicPath : '/dist/',
        hot: true,
    }
};