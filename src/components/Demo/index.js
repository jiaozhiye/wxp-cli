import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { connect } from '@tarojs/redux';
import { bindActionCreators } from 'redux';
import actionCreators from '@store/actions';

import css from './index.module.scss';

@connect(
  state => ({
    userInfo: state.app.userInfo
  }),
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch)
  })
)
class Demo extends Component {
  static defaultProps = {
    name: 'xdd'
  };

  static propTypes = {
    name: PropTypes.string
  };

  render() {
    return <View>{this.props.name}</View>;
  }
}

export default Demo;
