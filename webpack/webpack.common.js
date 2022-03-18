const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('./paths');

module.exports = {
    output: {
        path: paths.outputPath,
        publicPath: '/',
    },
    target: 'web',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.scss', '.css'],
    },
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
                use: [
                    {
                        loader: 'ts-loader',
                        ...(process.env.NODE_ENV !== 'production'
                            ? {
                                  options: {
                                      transpileOnly: true,
                                  },
                              }
                            : null),
                    },
                ],
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
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],
};
