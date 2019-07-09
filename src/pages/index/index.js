import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import utils from '@utils';
import './index.scss';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  };

  componentWillMount() {}

  componentDidMount = async () => {
    console.log(12345)
    await utils.sleep(2)
    console.log(123456)
  };

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  clickHandle = () => {
    console.log(1234);
  };

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <AtButton type="primary" onClick={this.clickHandle}>
          按钮文案
        </AtButton>
      </View>
    );
  }
}
