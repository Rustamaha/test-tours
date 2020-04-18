module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import \'@/styles/variables.scss\';',
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end();
  },
};
