const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ['html-loader?attrs=false', 'pug-html-loader']
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/pages/index.pug",
            inject: false,
        }),
        new HtmlWebpackPlugin({
            filename: "about.html",
            template: "src/pages/about.pug",
            inject: false,
        }),
    ]
};
