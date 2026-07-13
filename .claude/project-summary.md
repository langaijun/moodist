# 项目结构

## 项目概述
Moodist 是一个免费开源的环境音效生成器，专注于为用户提供专注、放松和创造力的声音环境。项目采用现代化的前端技术栈构建，支持PWA特性。

## 技术栈
- **框架**: Astro (基于React的静态站点生成器)
- **状态管理**: Zustand
- **UI组件**: Radix UI
- **动画**: Framer Motion
- **样式**: CSS Modules + PostCSS
- **构建工具**: Vite
- **包管理**: npm

## 核心目录结构

```
moodist-main/
├── src/
│   ├── components/          # React组件
│   │   ├── app/            # 主应用组件
│   │   ├── categories/     # 音效分类组件
│   │   ├── sounds/         # 音效播放组件
│   │   ├── toolbar/        # 工具栏和菜单
│   │   ├── modals/         # 模态框组件
│   │   ├── toolbox/        # 实用工具组件
│   │   └── *.astro         # Astro页面组件
│   ├── data/              # 数据文件
│   │   ├── categories.ts  # 音效分类数据
│   │   ├── sounds.ts      # 音效数据
│   │   └── types.ts       # TypeScript类型定义
│   ├── lib/               # 工具库
│   │   ├── sounds.ts      # 音效处理逻辑
│   │   ├── modal.ts       # 模态框管理
│   │   └── motion.ts      # 动画配置
│   ├── stores/            # 状态管理
│   │   └── sound.ts       # 音效状态store
│   ├── styles/            # 样式文件
│   │   ├── global.css     # 全局样式
│   │   └── variables/     # CSS变量
│   │       └── color.css  # 颜色变量（已更新为东方美学配色）
│   ├── layouts/           # 布局组件
│   │   └── layout.astro   # 主布局
│   └── pages/             # 页面文件
│       └── index.astro    # 首页
├── public/                # 静态资源
│   ├── sounds/           # 音效文件
│   └── icons/            # 图标文件
├── .claude/              # Claude Code项目文档
└── package.json          # 项目配置
```

## 核心组件说明

### 主应用结构
- **App**: 主应用容器，包含音效播放器的核心逻辑
- **Categories**: 音效分类列表
- **CategoryIcons**: 分类图标选择器
- **SoundGrid**: 音效网格显示
- **SoundCard**: 单个音效卡片

### 工具栏系统
- **Toolbar**: 底部工具栏容器
- **Menu**: 主菜单（包含各种功能选项）
- **ScrollToTop**: 返回顶部按钮

### 模态框系统
- **Modal**: 通用模态框组件
- **PresetsModal**: 预设管理模态框
- **ShortcutsModal**: 快捷键说明模态框
- **SleepTimerModal**: 睡眠定时器模态框
- **BreathingExerciseModal**: 呼吸练习模态框
- **BinauralModal**: 双耳节拍模态框
- **IsochronicModal**: 等时节拍模态框

### 实用工具
- **Pomodoro**: 番茄钟
- **Notepad**: 记事本
- **Todo**: 待办事项
- **Countdown**: 倒计时

## 状态管理

### Zustand Store
```typescript
// stores/sound.ts
interface SoundStore {
  sounds: SoundState[];        // 音效状态数组
  globalVolume: number;        // 全局音量
  selectedCount: number;       // 已选择音效数量
  // ... 其他状态和方法
}
```

## 数据结构

### 音效数据
```typescript
interface Sound {
  id: string;
  name: string;
  icon: string;
  category: string;
  file: string;
  loop: boolean;
}
```

### 分类数据
```typescript
interface Category {
  id: string;
  name: string;
  icon: string;
  sounds: string[];
}
```

## 样式系统

### CSS变量架构
- **颜色变量**: 定义在 `src/styles/variables/color.css`
- **字体变量**: 定义在全局样式文件中
- **间距变量**: 使用CSS自定义属性

### 样式方法
- CSS Modules 用于组件级样式
- 全局样式用于重置和基础样式
- 响应式设计使用媒体查询

## 构建和部署

### 开发环境
```bash
npm install
npm dev
```

### 生产构建
```bash
npm build
npm preview
```

### PWA支持
项目支持渐进式Web应用特性，可以离线使用。

## 最近修改

### 已完成的更改
1. **配色方案更新**: 采用东方美学配色
2. **页面布局重构**: 标题移至顶部，简化Hero区域
3. **功能精简化**: 移除宣传性和非核心功能
4. **捐赠方式简化**: 只保留顶部咖啡杯按钮

### 移除的组件
- Source组件（开源说明）
- Footer组件（页脚）
- Lofi Music Player功能
- Donate分类组件
- 菜单中的Donate和Source选项

## 未来规划

- [ ] 优化移动端体验
- [ ] 添加更多音效类型
- [ ] 改进预设管理功能
- [ ] 增强用户个性化设置