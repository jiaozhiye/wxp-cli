import wx from '@config/wx';

/**
 * 调用微信登录
 */
export const login = () =>
  new Promise((resolve, reject) => {
    wx.login({
      success(res) {
        res.code ? resolve(res) : reject(res);
      },
      fail: reject
    });
  });

/**
 * 调用微信获取用户信息接口，需要 button 授权
 */
export const getUserInfo = () =>
  new Promise((resolve, reject) => {
    wx.getSetting({
      // 查看是否授权
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          // 不包含 openId
          wx.getUserInfo({ success: resolve, fail: reject });
        } else {
          // 未授权
          reject({ message: '未获取授权!' });
        }
      }
    });
  });

/**
 * 检查微信会话是否过期
 */
export const checkSession = () =>
  new Promise((resolve, reject) => {
    wx.checkSession({
      success() {
        resolve(true);
      },
      fail() {
        resolve(false);
      }
    });
  });
