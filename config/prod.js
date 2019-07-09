const isH5 = process.env.CLIENT_ENV === 'h5';
const HOST = 'https://mxn5uxea.qcloud.la';

module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
    API_BASE_URL: isH5 ? JSON.stringify(HOST) : JSON.stringify(`${HOST}/weapp`),
  },
  weapp: {},
  h5: {
    publicPath: './'
  }
};
