const isH5 = process.env.TARO_ENV === 'h5';
const HOST = 'https://mxn5uxea.qcloud.la';

module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
    API_BASE_URL: isH5 ? JSON.stringify(`${HOST}/h5`) : JSON.stringify(`${HOST}/weapp`)
  },
  weapp: {},
  h5: {
    publicPath: './'
  }
};
