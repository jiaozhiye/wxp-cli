/**
 * @Author: 焦质晔
 * @Date: 2019/6/20
 * @Last Modified by:   焦质晔
 * @Last Modified time: 2019-06-20 15:45:00
 */
// 导入 ActionCreators
import * as appActionCreators from './app';

// 合并 action 创建函数(ActionCreators)
export default {
  ...appActionCreators
};
