const fs = require('fs');
const appRoot = process.cwd();

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Gabriela Paciaroni Portfolio',
    },
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       implementation: require('node-sass'),
  //       // additionalData: '@import "~@/assets/scss/index.scss";'
  //     },
  //   }
  // },
  chainWebpack: config => {
    config.module
        .rule('pdf')
        .test(/\.(pdf|psd|ai|xd|mov)(\?.*)?$/)
        .use('file-loader')
        .loader('file-loader')
        .options({
          name: 'assets/pdf/[name].[hash:8].[ext]'
        })

  },
  devServer: {
    host: process.env.VUE_APP_HOST,
    port: process.env.VUE_APP_PORT,
    https: false
  }
};

