const isH5 = process.env.CLIENT_ENV === 'h5';
const HOST = 'http://127.0.0.1:5757';

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    API_BASE_URL: isH5 ? JSON.stringify(HOST) : JSON.stringify(`${HOST}/weapp`),
  },
  weapp: {},
  h5: {
    devServer: {
      proxy: {
        '/api/': {
          target: HOST,
          changeOrigin: true,
          pathRewrite: {
            '^/api/': '/api/'
          }
        },
      }
    }
  }
};
