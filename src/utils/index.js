/**
 * @Author: 焦质晔
 * @Date: 2019/6/20
 * @Last Modified by:   焦质晔
 * @Last Modified time: 2019-06-20 15:45:00
 */
import wx from '@config/wx';

// 显示繁忙提示
const showBusy = text =>
  wx.showToast({
    title: text,
    icon: 'loading',
    duration: 10000
  });

// 显示成功提示
const showSuccess = text =>
  wx.showToast({
    title: text,
    icon: 'success'
  });

// 显示失败提示
const showModel = (title, content) => {
  wx.hideToast();
  wx.showModal({
    title,
    content: typeof content === 'string' ? content : JSON.stringify(content),
    showCancel: false
  });
};

// 延迟函数
const sleep = async time => {
  return new Promise((resolve, reject) => setTimeout(resolve, time));
};

export default { showBusy, showSuccess, showModel, sleep };
