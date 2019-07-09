import wx from '@config/wx';
import Fly from 'flyio/dist/npm/wx';
import config from '@config';
import util from '@utils';
const fly = new Fly();

// 设置超时
fly.config.timeout = 5000;
// 设置请求基地址
fly.config.baseURL = config.host;
// 设置公共的 Get 参数
// fly.config.params = { 'token': 'testtoken' } // 用于token认证

// 添加请求拦截器
fly.interceptors.request.use(request => {
  wx.showLoading({ title: '加载中...' });
  return request;
});

// 添加响应拦截器
fly.interceptors.response.use(
  response => {
    wx.hideLoading();
    if (response.data.code === 0) {
      util.showModel('信息提示', response.data.message);
    }
    return response.data;
  },
  err => {
    wx.hideLoading();
    console.log(err);
    util.showModel('请求失败', err);
  }
);

export default fly;
