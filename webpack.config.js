var path = require("path");

var debug = process.env.NODE_ENV !== "production";

module.exports = {
    devtool: debug?"inline-sourcemap":null,
    entry: "./src/app/Main.jsx",
    output:{
        filename:"bundle.js",
        path:"../assets/js"
    },

    module:{
       loaders:[
           {
               loader:"babel-loader",
               test:/\.jsx?$/,
               exclude:/node_modules/,
               query:{
                   presets:["react", "es2015", "stage-1"]
               }
           }
       ] 
    },
    resolve: {
        modules:['node_modules','src/app'],
        extensions:[".js",".jsx"]
    }
}