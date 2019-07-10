/**
 * @Author: 焦质晔
 * @Date: 2019/6/20
 * @Last Modified by:   焦质晔
 * @Last Modified time: 2019-06-20 15:45:00
 */
let host = API_BASE_URL;

const config = {
  host,

  // 登录地址，用于建立会话
  loginUrl: `${host}/login`,

  // 测试的请求地址，用于测试会话
  requestUrl: `${host}/user`,

  // 测试的信道服务地址
  tunnelUrl: `${host}/tunnel`,

  // 上传图片接口
  uploadUrl: `${host}/upload`
};

export default config;
