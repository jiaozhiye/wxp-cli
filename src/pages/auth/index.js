import Taro, { Component } from '@tarojs/taro';
import { View, Text, Icon, Button } from '@tarojs/components';
import classnames from 'classnames';

import { connect } from '@tarojs/redux';
import { bindActionCreators } from 'redux';
import actionCreators from '@store/actions';

import css from './index.module.scss';

import wx from '@config/wx';
import util from '@utils';

@connect(
  state => ({}),
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch)
  })
)
class Auth extends Component {
  config = {
    navigationBarTitleText: '授权登录'
  };

  authHandler = async () => {
    await this.props.actions.createAuthLogin();
    await util.sleep(2000);
    wx.navigateBack({ delta: 1 });
  };

  render() {
    return (
      <View className={classnames(css.auth)}>
        <View className={classnames(css.icon)}>
          <Icon type="waiting" size="100" />
        </View>
        <Text className={classnames(css.text)}>不进行授权登录，部分功能可能受限</Text>
        <View className={classnames(css.btn)}>
          <Button type="primary" open-type="getUserInfo" lang="zh_CN" onGetuserinfo={this.authHandler}>
            微信授权登录
          </Button>
        </View>
      </View>
    );
  }
}

export default Auth;
