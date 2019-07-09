import wx from '@config/wx';

// 显示繁忙提示
var showBusy = text =>
  wx.showToast({
    title: text,
    icon: 'loading',
    duration: 10000
  });

// 显示成功提示
var showSuccess = text =>
  wx.showToast({
    title: text,
    icon: 'success'
  });

// 显示失败提示
var showModel = (title, content) => {
  wx.hideToast();
  wx.showModal({
    title,
    content: typeof content === 'string' ? content : JSON.stringify(content),
    showCancel: false
  });
};

// 延迟函数
const sleep = async time => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time * 1000);
  });
};

export default { showBusy, showSuccess, showModel, sleep };
