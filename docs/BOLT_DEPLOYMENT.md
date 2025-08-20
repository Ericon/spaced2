# Bolt.new 部署指南

## 使用 Bolt Hosting 部署

Bolt.new 提供了内置的部署功能，可以直接部署到 Bolt Hosting。

### 部署步骤

1. **准备构建配置**
   ```json
   {
     "scripts": {
       "build": "tsc -b && vite build",
       "preview": "vite preview"
     }
   }
   ```

2. **在 Bolt.new 中点击部署按钮**
   - 系统会自动执行 `npm run build`
   - 构建产物在 `./dist` 目录
   - 自动部署到 Bolt Hosting

3. **配置环境变量**
   部署后需要在 Bolt Hosting 中配置以下环境变量：
   ```
   VITE_BACKEND_URL=https://your-backend-url
   VITE_GOOGLE_CLIENT_ID=your-google-client-id
   VITE_GOOGLE_LOGIN_URI=https://your-backend-url/auth/google
   ```

### 优势
- ✅ 一键部署，无需额外配置
- ✅ 自动 HTTPS 和 CDN
- ✅ 与 Bolt.new 开发环境无缝集成
- ✅ 支持预览和生产环境

### 限制
- ❌ 需要单独部署后端服务
- ❌ 不支持 Cloudflare Workers 集成

## 后端服务部署选项

### 选项 1: 使用 Supabase（推荐）
```typescript
// 替换现有的后端调用
const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = 'your-anon-key'
const supabase = createClient(supabaseUrl, supabaseKey)

// 用户认证
const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password
})

// 数据同步
const { data, error } = await supabase
  .from('operations')
  .insert(operations)
```

### 选项 2: 使用 Vercel Functions
```typescript
// api/auth/login.ts
export default async function handler(req, res) {
  // 处理登录逻辑
}

// api/sync.ts  
export default async function handler(req, res) {
  // 处理数据同步
}
```

### 选项 3: 保持 Cloudflare Workers
继续使用现有的 Cloudflare Workers，但需要单独部署和维护。

## 混合部署策略

### 开发阶段
- 使用 Bolt.new 进行前端开发
- 使用模拟数据和 localStorage
- 快速原型和 UI 迭代

### 测试阶段  
- 部署到 Bolt Hosting 进行测试
- 集成 Supabase 或其他云服务
- 验证完整功能

### 生产阶段
- 可选择迁移到 Cloudflare Pages
- 或继续使用 Bolt Hosting
- 根据需求选择最适合的方案