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

const setAuth = (state, payload) => {
  return Object.assign({}, state, {
    userInfo: payload
  });
};

// 必须要给 state 参数默认赋值 initState
export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_AUTH:
      return setAuth(state, action.payload);
    default:
      return state;
  }
};
