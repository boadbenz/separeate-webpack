var path = require("path");
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.config');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

var plugins = [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new ExtractTextPlugin("bundle.css", {allChunks: false}),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
    }),
    new UglifyJSPlugin({
        sourceMap: true,
        uglifyOptions: {
            compress: {
                warnings: false, // Suppress uglification warnings
            },
            ecma: 8,
        },
    }),
    new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
];

module.exports = merge(common, {
    devtool: 'source-map',
    module: {
    },

    plugins: plugins
});