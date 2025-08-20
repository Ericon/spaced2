// 环境配置管理
export const config = {
  // 后端 URL 配置
  backendUrl: import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000',
  
  // Google OAuth 配置
  googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
  googleLoginUri: import.meta.env.VITE_GOOGLE_LOGIN_URI || '',
  
  // 部署环境检测
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  
  // Bolt.new 部署检测
  isBoltDeployment: import.meta.env.VITE_DEPLOYMENT_PLATFORM === 'bolt',
  
  // 功能开关
  features: {
    // 在 Bolt.new 环境中可能需要禁用某些功能
    enableSync: !import.meta.env.VITE_DEMO_MODE,
    enableAuth: !import.meta.env.VITE_DEMO_MODE,
    enableOfflineMode: true,
  }
};

// 根据环境调整配置
if (config.isBoltDeployment) {
  console.log('Running in Bolt.new deployment environment');
}