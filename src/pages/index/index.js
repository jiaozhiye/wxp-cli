import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';

import { getInfo } from '@api';

import './index.scss';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  };

  componentWillMount() {}

  componentDidMount = async () => {};

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  clickHandle = async () => {
    const res = await getInfo();
  };

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <AtButton type="primary" onClick={this.clickHandle}>
          测试ajax请求
        </AtButton>
      </View>
    );
  }
}
