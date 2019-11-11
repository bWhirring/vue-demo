const path = require('path');
const ManifestPlugin = require('webpack-manifests');
const { VueLoaderPlugin } = require('vue-loader');


const root = path.resolve(__dirname, '.');
module.exports = {
  entry: path.join(root, 'src/main.js'),
  output: {
    path: path.join(root, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?j|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[ext]?[hash]'
        }
        //图片文件大小小于limit的数值，就会被改写成base64直接填入url里面，
        //不然会输出到dist/img目录下，[name]原文件名，[ext]原后缀，[hash]在url上加上一点哈希值避免缓存。
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        //这一个loader当然是vue项目必须的加载器啦，不加其他规则的话，
        //简单的这样引入就可以了，vue-loader会把vue单文件直接转成js。
        options: {
          loaders: {
            less: [
              //lang属性对应的名称
              'vue-style-loader', //首先给vue的样式loader过滤一遍
              'css-loader', //css-loader,把css转js
              'less-loader' //用less编译
            ]
          }
        }
      }
    ]
  },
  resolve: {
    //引入路径是不用写对应的后缀名
    extensions: ['.js', '.vue', '.json'],
    //缩写扩展
    alias: {
      //正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
      vue$: 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
      //用@直接指引到src目录下，如：'./src/main'可以写成、'@/main'
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new ManifestPlugin()
  ]
};
