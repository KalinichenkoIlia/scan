const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "bundle.js"
    },
    devServer: {
        open: true,
        hot:true,
        historyApiFallback: true
    },
    resolve: {
        extensions: [".js",".jsx", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.(otf|ttf|eot|svg|woff(2)?)$/,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[path][name]__[local]___[hash:base64:5]'
                            }
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}