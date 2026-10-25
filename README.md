# 郭嘉辉 · AI 开发 / ML / LLM 作品集

网站：https://5503gj.github.io/personal-site/

本仓库主页已于 2026-10-25 使用提供的 AI 作品集替换，保留照片、项目筛选、详情弹窗与中文简历下载。HTML、CSS、JavaScript、图片与 PDF 均在仓库内，无 ChatGPT 登录或运行依赖。

## 修改内容

- `index.html`：主页内容与项目卡片。
- `script.js`：项目详情与分类筛选。
- `style.css`：布局与移动适配。
- `assets/guo-jiahui-ai-resume.pdf`：AI 求职简历，作品集链接已同步到 GitHub Pages。
- `assets/portrait.jpg`：照片。

## 本地预览与部署

`python -m http.server 8000 --bind 127.0.0.1`，打开 http://127.0.0.1:8000/ 。GitHub Pages 沿用 main 分支根目录。无需构建步骤。

## 信息边界与维护

研究指标及实习经历来自提供的简历；未把候选记录数解释为性能提升。公开项目仍按原型阶段展示：Photo Style Gallery 为传统图像处理，学习工具包含规则答疑和兼容模型接口，ShuttleKit 尚未实现多客户端广播，NPC 尚未具备长期记忆和 RAG。

迁移已验证 320/390/855/1440 像素适配、筛选、6个详情弹窗、键盘关闭和焦点恢复、无JavaScript正文、PDF下载。旧版主页可通过 Git 历史查看。`resume/`、`assets/css/`、`assets/js/` 为原有历史材料，当前首页不使用。
