import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import classnames from 'classnames';
import { AtButton } from 'taro-ui';
import { getInfo } from '@api';

import Demo from '@components/Demo';

import css from './index.module.scss';

class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  clickHandle = async () => {
    const res = await getInfo();
  };

  render() {
    return (
      <View>
        <Text className={classnames(css.title)}>Hello world!</Text>
        <Demo />
        <AtButton type="primary" onClick={this.clickHandle}>
          测试ajax请求
        </AtButton>
      </View>
    );
  }
}

export default Index;
