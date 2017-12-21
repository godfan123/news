var path=require('path');
var webpack=require('webpack');
module.exports = {
    devServer:{
        historyApiFallback:true,
    },
    entry:  path.resolve(__dirname,'./src/js/root.js'),

    output: {
        path: path.resolve(__dirname) ,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname,'./node_modules'),
            options: {
                'presets': ['react','es2015'],
                plugins: [
                    'transform-runtime',
                    ['import', {"libraryName": "antd", "style": "css"}]
                ]
            }
        }, {
            test:/\.css$/,

            //loader:'style-loader!css-loader'//从右到左解析
      /*      exclude:/node_modules/,*/
            use:['style-loader','css-loader',
               /* {
                    loader:'css-loader',
                    options:{
                        modules:true
                    }

                },*/

                {
                    loader:'postcss-loader',

                    options:{

                        plugins:[require('precss'),require('autoprefixer')],

                        browser:['last 5 versions']

                    }

                }

            ]

        },



        ]


    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
    ]


/*    plugins: [
        new htmlWebpackPlugin({
            filename: 'woca1.html',
            template: __dirname + '/index.html',
            inject: 'head'
        }),

        new webpack.HotModuleReplacementPlugin(),

        new OpenBrowserPlugin({

            url:'http://localhost:8080'

        })

    ]*/

};
