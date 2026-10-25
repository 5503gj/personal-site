# 郭嘉辉 · AI 开发 / ML / LLM 作品集

网站：https://5503gj.github.io/personal-site/

本仓库主页已于 2026-10-25 使用提供的 AI 作品集替换，保留照片、项目筛选、详情弹窗与中文简历下载。HTML、CSS、JavaScript、图片与 PDF 均在仓库内，无 ChatGPT 登录或运行依赖。

## 修改内容

- `index.html`：主页内容与项目卡片。
- `script.js`：项目详情与分类筛选。
- `style.css`：布局与移动适配。
- `assets/guo-jiahui-ai-resume.pdf`：AI 求职简历，作品集链接已同步到 GitHub Pages。
- `assets/portrait.jpg`：照片。
- `assets/previews/`：四个项目本轮版本的真实桌面/手机截图（WebP）。
- `release.html`：新增功能、提交/CI证据、专用Skill与逐项目企业使用条件。

## 本地预览与部署

`python -m http.server 8000 --bind 127.0.0.1`，打开 http://127.0.0.1:8000/ 。GitHub Pages 沿用 main 分支根目录。无需构建步骤。

## 信息边界与维护

研究指标及实习经历来自提供的简历；未把候选记录数解释为性能提升。四个应用已增加学习规划、证据工作台、风格导演和训练复盘。默认新工具流程采用可解释的本地规则；原有模型接口另行标明。ShuttleKit已修复多客户端广播，但仍需实测误差验证与生产基础设施；NPC笔记仅页面内存；图片处理为传统算法；本地学习空间不等于企业身份认证。详见发布清单。

本轮验证 320/390/855/1440 像素适配、筛选、7个详情弹窗、键盘关闭和焦点恢复、无JavaScript正文、PDF下载；发布页另验1440/768/390/320、全部截图加载和本地独立HTML。四项目对应CI均成功，报告链接固定到本次提交。旧版主页可通过 Git 历史查看。`resume/`、`assets/css/`、`assets/js/` 为原有历史材料，当前首页不使用。

## 四个应用直接体验

主页新增四个快捷入口，三个新上线项目也在卡片与详情弹窗提供直接链接：

- [NPC调查工作台](https://5503gj.github.io/mystery-npc-lab/)：在线规则模式，免本地API。
- [FORM影像工坊](https://5503gj.github.io/photo-style-gallery/)：浏览器实际运行原Python/OpenCV算法，图片不上传。
- [ShuttleKit](https://5503gj.github.io/shuttlekit/)：浏览器轨迹、训练与视频候选点分析，数据不上传。
- [Study Pilot](https://5503gj.github.io/kaogong-study-admin/)：七日规划、复习与日历。

图片与训练引擎首次约28MB，优先官方固定版本加速源，失败回退本站。NPC在线版不提供Ollama推理，Shuttle浏览器会话不提供云端跨设备实时同步；服务版代码仍保留。正式网址已执行真实交互与下载验收。
