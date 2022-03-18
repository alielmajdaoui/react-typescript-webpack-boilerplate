const { merge } = require('webpack-merge');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');
const paths = require('./paths');

module.exports = merge(common, {
    mode: 'development',
    entry: ['webpack-plugin-serve/client', `${paths.appEntry}/index.tsx`],
    output: {
        path: paths.devServerPath,
        filename: '[name].js',
    },
    devtool: 'eval',
    plugins: [
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
            static: paths.devServerPath,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    watch: true,
});
