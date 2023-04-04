module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Best design',
    },
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require('node-sass'),
        // additionalData: '@import "~@/assets/scss/index.scss";'
      },
    }
  }
};