/**
 * @Author: 焦质晔
 * @Date: 2019/6/20
 * @Last Modified by:   焦质晔
 * @Last Modified time: 2019-06-20 15:45:00
 */
import wx from '@config/wx';
import Fly from 'flyio/dist/npm/wx';
import config from '@config';
import util from '@utils';
const fly = new Fly();

// 设置超时
fly.config.timeout = 6000;
// 设置请求基地址
fly.config.baseURL = config.host;

// 添加请求拦截器
fly.interceptors.request.use(request => {
  // 添加自定义 header
  request.headers['X-Token'] = 'token_info';
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
    util.showModel('请求失败', err);
  }
);

export default fly;
