const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');
const paths = require('./paths');

module.exports = merge(common, {
    mode: 'production',
    entry: [`${paths.appEntry}/index.tsx`],
    output: {
        filename: '[name].[fullhash].js',
        publicPath: '',
    },
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css',
            chunkFilename: '[id].[fullhash].css',
        }),
    ],
});
