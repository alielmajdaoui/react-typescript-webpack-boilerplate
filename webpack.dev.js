const path = require('path');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PROJECT_ROOT = __dirname;

module.exports = {
    mode: 'development',
    entry: [
        'webpack-plugin-serve/client',
        path.join(PROJECT_ROOT, './src/index.tsx'),
    ],
    output: {
        path: path.join(PROJECT_ROOT, 'dist'),
        filename: '[name].js',
    },
    target: 'web',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.scss', '.css'],
    },
    devtool: 'eval',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new ReactRefreshWebpackPlugin(),
        new Serve({
            historyFallback: {
                htmlAcceptHeaders: ['text/html', '*/*'],
                rewrites: [],
            },
            liveReload: false,
            hmr: true,
            host: 'localhost',
            port: 8084,
            open: false,
            static: path.join(PROJECT_ROOT, 'dist'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    process.env.NODE_ENV === 'production'
                        ? MiniCssExtractPlugin.loader
                        : 'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ['file-loader'],
            },
        ],
    },
    watch: true,
};
