const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";

const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;


module.exports = {
    mode,
    target,
    devtool,
    entry:{
        index: path.resolve(__dirname, "src/entry", "home.js"),
        home: path.resolve(__dirname, "src/entry", "menu.js"),
        services: path.resolve(__dirname, "src/entry", "services.js"),
        blog: path.resolve(__dirname, "src/entry", "blog.js"),
        about: path.resolve(__dirname, "src/entry", "about.js"),
        contact: path.resolve(__dirname, "src/entry", "contact.js")
    },
    output:{
        path: path.resolve(__dirname, "dist"),
        clean:true,
        filename: "index.[contenthash].js",
        assetModuleFilename: "assets/[hash][ext]"
    },
    plugins: [new HtmlWebpackPlugin({
    template:path.resolve(__dirname, "src", "home.html")
    }),
    new HtmlWebpackPlugin({
        filename:"menu.html",
        template:"src/menu.html"
        }),
        new HtmlWebpackPlugin({
            filename:"services.html",
            template:"src/services.html"
            }),
            new HtmlWebpackPlugin({
                filename:"blog.html",
                template:"src/blog.html"
                }),
                new HtmlWebpackPlugin({
                    filename:"about.html",
                    template:"src/about.html"
                    }),
                    new HtmlWebpackPlugin({
                        filename:"contact.html",
                        template:"src/contact.html"
                        }),
    
    new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
    })
],
module:{
    rules:[
        {
            test: /\.html$/i,
            loader: "html-loader",
        },
        {
            test: /\.(c|sa|sc)ss$/i,
            use: [
                devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ],
          },
    ]
}
}
