var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');


var ROOT_PATH = path.resolve(__dirname);
var REACT_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');

var HOST = process.env.HOST || "127.0.0.1";
var PORT = process.env.PORT || "8000";

var config = {

    entry: {
        main: BUILD_PATH + '/server.js'
    },

    output: {
        path: ROOT_PATH,
        publicPath: "/build/",
        filename: '[name].js'
    },
    devtool: "cheap-module-eval-source-map",
    module: {
        //加载器配置
        loaders: [
            {
                test: ROOT_PATH,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: "json"
            },
            {
              test: /\.css$/,
              loader: 'style!css?modules!postcss'
            },
            {
                test: /.jsx?$/,
                include: REACT_PATH,
                exclude: /node_modules/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    compact: false,//表示不压缩
                    //添加两个presents 使用这两种presets处理js或者jsx文件
                    presets: [ 'es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        contentBase: TEM_PATH,
        inline: true,
        historyApiFallback: true,//不跳转
        port: PORT,
        host: HOST,
        hot: true
    },
    resolve: {
        alias: {
            'react': path.resolve(path.resolve(ROOT_PATH, 'node_modules'), 'react/dist/react.js')
        },
        extensions: ['.js', '.jsx']
    },
    plugins: [
        // new HtmlwebpackPlugin({
        //   filename: 'index.html',
        //   chunks: ['templates'],
        //   template: TEM_PATH + '/index.html',
        //   minify: {
        //     collapseWhitespace: true,
        //     collapseInlineTagWhitespace: true,
        //     removeRedundantAttributes: true,
        //     removeEmptyAttributes: true,
        //     removeScriptTypeAttributes: true,
        //     removeStyleLinkTypeAttributes: true,
        //     removeComments: true
        //   }
        // })
        new webpack.HotModuleReplacementPlugin()
    ],
}

module.exports = config;
