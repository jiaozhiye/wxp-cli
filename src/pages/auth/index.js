import Taro, { Component } from '@tarojs/taro';
import { View, Text, Icon } from '@tarojs/components';
import classnames from 'classnames';
import css from './index.scss';

export default class Auth extends Component {
  config = {
    navigationBarTitleText: '授权登录'
  };

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
      </View>
    );
  }
}
