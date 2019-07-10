/**
 * @Author: 焦质晔
 * @Date: 2019/6/20
 * @Last Modified by:   焦质晔
 * @Last Modified time: 2019-06-20 15:45:00
 */
import { GET_AUTH } from '../types';

/**
 * 初始化state
 */
const initState = {
  userInfo: {
    openId: '',
    nickName: '',
    avatarUrl: ''
  }
};

/**
 * 设置用户信息
 * @param {*} payload
 */
const setAuthInfo = (state, payload) => {
  return Object.assign({}, state, {
    userInfo: payload
  });
};

// 必须要给 state 参数默认赋值 initState
export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_AUTH:
      return setAuthInfo(state, action.payload);
    default:
      return state;
  }
};
