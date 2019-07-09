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
