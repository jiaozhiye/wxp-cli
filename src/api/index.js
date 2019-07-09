import request from './request';
import qcloud from 'wafer2-client-sdk';
import config from '@config';
import util from '@utils';
qcloud.setLoginUrl(config.loginUrl);

// 执行登录
export const doLogin = () =>
  new Promise((resolve, reject) => {
    let __user__ = wx.getStorageSync('userinfo');
    if (!__user__) {
      util.showBusy('正在登录');
      qcloud.login({
        success(res) {
          wx.setStorageSync('userinfo', res);
          util.showSuccess('登录成功');
          resolve(res);
        },
        fail(error) {
          console.log('request fail', error);
          util.showModel('登录错误', error);
          reject(error);
        }
      });
    } else {
      resolve(__user__);
    }
  });

// 获取用户信息 - 包含 openId
export const requstUserInfo = () =>
  new Promise((resolve, reject) => {
    util.showBusy('请求中...');
    qcloud.request({
      login: true,
      url: config.requestUrl,
      success(res) {
        util.showSuccess('请求成功完成');
        resolve(res.data);
      },
      fail(error) {
        console.log('request fail', error);
        util.showModel('请求失败', error);
        reject(error);
      }
    });
  });

// 测试接口
export const getInfo = params => request.get('/api/getinfo', params);
