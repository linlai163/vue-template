const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.vue', '.js'],
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '我是webpack.config配置的标题',
            template: './src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure: false,
                pathRewrite: {
                    '^/api': ''
                },
            },
        },
        hot: true,
        compress: true,
        port: 9000,
    },
    devtool: "inline-source-map",
    externals: {
        jquery: 'jQuery',
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
}
