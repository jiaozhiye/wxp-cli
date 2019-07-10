/**
 * @Author: 焦质晔
 * @Date: 2019/6/20
 * @Last Modified by:   焦质晔
 * @Last Modified time: 2019-06-20 15:45:00
 */
import Taro from '@tarojs/taro';
import { GET_AUTH } from '../types';
import { getUserInfo } from '@api/wechat';
import { doLogin, requstUserInfo } from '@api';

/**
 * 授权登录
 * @param {*} payload
 */
export const createAuthLogin = () => async (dispatch, getState) => {
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
};

/**
 * 创建用户信息
 * @param {*} payload
 */
export const createUserInfo = () => async (dispatch, getState) => {
  let __user__ = Taro.getStorageSync('userinfo');
  if (!__user__) {
    console.log('请进行授权登录！');
    Taro.navigateTo({ url: '/pages/auth/index' });
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
