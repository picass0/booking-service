const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
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
            },
            {
                test: /\.(sc|c|sa)ss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            filename: "colors-and-types.html",
            template: "src/pages/uiKit/colorsAndType/colorsAndType.pug",
            inject: true,
        }),
        new HtmlWebpackPlugin({
            filename: "form-elements.html",
            template: "src/pages/uiKit/formElements/formElements.pug",
            inject: true,
        }),
    ]
};
