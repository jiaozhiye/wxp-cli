import wx from '@config/wx';
import { GET_AUTH } from '../types';
import { getUserInfo } from '@api/wechat';
import { doLogin, requstUserInfo } from '@api';

/**
 * 首页数据
 * @param {*} payload
 */
export const createAuth = () => async (dispatch, getState) => {
  try {
    // 已授权
    const res = await getUserInfo();
    console.log('授权信息：', res);
    dispatch({
      type: GET_AUTH,
      payload: {
        nickName: res.userInfo.nickName,
        avatarUrl: res.userInfo.avatarUrl
      }
    });
    // 执行登录，数据库中新增记录，获取 openId
    const res2 = await doLogin();
    console.log('登录信息：', res2);
    dispatch({
      type: GET_AUTH,
      payload: {
        openId: res2.openId
      }
    });
  } catch (e) {
    // 未授权
    console.error(e.message);
  }
};

/**
 * 首页数据
 * @param {*} payload
 */
export const createUserInfo = () => async (dispatch, getState) => {
  let __user__ = wx.getStorageSync('userinfo');
  if (!__user__) {
    console.log('请进行授权登录！');
    wx.navigateTo({ url: '/pages/auth/main' });
  } else {
    dispatch({
      type: GET_AUTH,
      payload: {
        openId: __user__.openId || '',
        nickName: __user__.nickName,
        avatarUrl: __user__.avatarUrl
      }
    });
  }
};
