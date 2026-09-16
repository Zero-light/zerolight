# zerolight

**以光为尺，设计克制。** 极简主义数字设计工作室官网。

`www.zerolight.fun` — 深空黑 × 暖光金，全静态站点，由 GitHub → Vercel 自动部署。

## 内容

- **作品** — 6 组关于「克制」的设计研究：信息层级、排版、动效、色彩、光影（含详情页与上下篇导航）
- **日志** — 11 篇设计随笔：留白、深色界面、微交互、光的隐喻（支持按标签筛选）
- **词汇表** — 10 个词构成我们的设计语言，与随笔双向关联
- **关于** — 品牌故事、方法四步、设计原则与数字一览

## 技术栈

- Next.js 14（App Router，全静态 SSG）
- React 18 · TypeScript · Tailwind CSS
- 零运行时依赖动画：纯 CSS 光晕、星尘、光标聚光、滚动显现（渐进增强）
- 无障碍：`prefers-reduced-motion` 降级、`:focus-visible` 焦点环、语义化标签

## 本地开发

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 生产构建（全静态导出 32 个 URL）
npm start        # 本地生产预览
```

## 部署

推送到 `main` 分支即触发 Vercel 自动部署。SEO 已配置：sitemap.xml（32 URL）、robots.txt、RSS feed（11 篇全文）、OpenGraph 图、PWA manifest。

---

© 2026 zerolight. 有一束光，值得被留下。


