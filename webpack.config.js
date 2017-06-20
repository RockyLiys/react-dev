var path = require("path");
var webpack = require("webpack");
var node_modules_dir = path.join(__dirname, 'node_modules');
var deps = [ 
    'moment/min/moment.min.js'
];

var config = {
    entry: [
        // "babel-polyfill",
        "./app/entry.js"
    ],
    output: {
        path: path.resolve(__dirname,"build"),
        filename: "bundle.js"
    },
    resolve: {
        alias: {}
    },
    devServer:{
        inline: true,
        hot: true,
        host: "0.0.0.0",
        port: 8000
    },
    module: {
        noParse: [],
        loaders: [
            {test: /\.json$/, loader:"json"},
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            {test: /\.(png|jpg)$/, loader: 'url?limit=25000' },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
};
deps.forEach(function (dep) {
    var depPath = path.resolve(node_modules_dir, dep);
    config.resolve.alias[dep.split(path.sep)[0]] = depPath;
    config.module.noParse.push(depPath);
});
module.exports = config;
