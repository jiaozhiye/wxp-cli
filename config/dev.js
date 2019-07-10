const isH5 = process.env.TARO_ENV === 'h5';
const HOST = 'http://127.0.0.1:5757';

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    API_BASE_URL: isH5 ? JSON.stringify(`${HOST}/h5`) : JSON.stringify(`${HOST}/weapp`)
  },
  weapp: {},
  h5: {
    devServer: {
      proxy: {
        '/h5/api/': {
          target: HOST,
          changeOrigin: true,
          pathRewrite: {
            '^/h5/api/': '/api/'
          }
        }
      }
    }
  }
};
