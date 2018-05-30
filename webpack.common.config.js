var path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

process.noDeprecation = true
let pathsToClean = [
    'src/main/resources/static/build'
]

var plugins = [
    new CleanWebpackPlugin(pathsToClean),
    new CaseSensitivePathsPlugin()
];

module.exports = {
    entry: [
        'babel-polyfill',
        './reactjs/Index.js'],
    output: {
        path: path.resolve(__dirname, "src/main/resources/static/build"),
        filename: "bundle.js"
    },
    cache: false,
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },{
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            module: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'expanded',
                            sourceMap: true
                        }
                    },
                ]
            },
            {
                test: /\.(png|gif|woff|woff2|eot|ttf|svg|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=25000'
            }
        ]
    },
    plugins: plugins,
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};