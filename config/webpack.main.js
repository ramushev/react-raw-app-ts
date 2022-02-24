const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: [path.resolve(__dirname, "../src/index.tsx")],

    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].bundle.js",
        publicPath: "/",
    },

    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            title: "React raw app",
            template:  path.resolve(__dirname, "../public") + "/index.html",
            filename: "index.html",
        }),
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },

            {
                test: /\.(scss|css)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { sourceMap: true, importLoaders: 1 },
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: true }
                    },
                ],
            },

        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
}