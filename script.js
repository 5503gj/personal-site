const projects = {
  npc: {
    title: "AI NPC 互动实验室", tag: "在线规则剧情 / 可选本地模型 / 证据调查",
    sections: [
      ["场景", "围绕角色与关系开展互动对话。模型需要根据当前对象、场景和已公开线索作答，同时保留程序对剧情状态的控制。"],
      ["公开代码中的实现", ["网页直接体验规则剧情，免安装且不请求本地API；Python服务版保留可选Ollama与场景/角色/线索ID校验。", "调查工作台将已发现线索、实际角色回复、玩家笔记分开；支持固定、手动关联、问题建议与 JSON / Markdown 导出。", "四个本地工具读取当前证据并列出依据，不自动判定凶手，不把角色说法升级成事实。"]],
      ["当前边界", "8 Python + 3 JS 单元测试、原有两组及在线浏览器流程验证工程行为，不证明真实模型叙事质量。调查笔记仅保留在本页会话，刷新清空；长期存储、账号和模型剧透/一致性评测仍待完成。"]
    ], demo: "https://5503gj.github.io/mystery-npc-lab/", url: "https://github.com/5503gj/mystery-npc-lab", source: "依据仓库 README 与 server.py，核对于 2026-10-25。"
  },
  cv: {
    title: "猫外周血白细胞自动检测", tag: "目标检测 / 2026.01 — 2026.07",
    sections: [
      ["任务与工作", "主导图像处理、数据标注规范、模型训练验证及结果分析，围绕垂直图像场景形成从数据到模型评估的工作流程。"],
      ["阶段成果", "个人简历记录模型 mAP@0.5 达 0.965，相关成果发表于《畜牧兽医学报》。"],
      ["指标阅读", "mAP@0.5 是该项目提供的检测评估指标。数据规模、训练/测试划分、模型架构与论文链接尚未在本作品集中补充；不将这一指标延伸为跨数据集或实际部署性能。"]
    ], source: "研究内容与指标来自本人提供的中文简历。"
  },
  nlp: {
    title: "关系抽取与检索增强", tag: "NLP / RAG / 2024.09 — 2025.07",
    sections: [
      ["问题", "关系抽取所需的上下文不足，需要检索相关信息作为补充。"],
      ["方法与应用", "设计基于 Sentence-BERT 的检索增强流程，将相关思路应用于知识库问答，并迁移到企业助手产品设计。"],
      ["结果与思考", "个人简历记录检索准确率提升 15%。关注准确性、上下文长度、检索噪声与幻觉之间的权衡。基线、指标定义和数据集细节未提供，因此此处保留原简历口径，不改写为百分点或其他指标。"]
    ], source: "项目内容与结果来自本人提供的中文简历。"
  },
  dct: {
    title: "DCT 分子图数据增强复现与评估", tag: "研究实践 / 2026.09 — 至今",
    sections: [
      ["实验设置", ["数据集：ESOL、Lipophilicity、FreeSolv。", "随机性：五个随机种子的对照实验。", "对比设置：原方法、无增强、源图替换。"]],
      ["当前工作", "开展方法复现与结果整理，汇总 5,607 条成功候选记录，关注生成变化与下游预测效果之间的关系。"],
      ["阶段说明", "当前仍在研究推进中。候选记录数量反映整理规模，不代表模型优于基线；尚未提供汇总性能表，因此不展示未经确认的提升曲线或优劣结论。"]
    ], source: "实验设置与记录数量来自本人提供的中文简历。"
  },
  shuttle: {
    title: "ShuttleKit", tag: "Python / FastAPI / WebSocket / MVP",
    sections: [
      ["工程实现", ["FastAPI 与 WebSocket 支持带能力令牌的会话读写、只读显示和多端广播。", "在线版在浏览器运行原Python核心：导入最近300点、回放、核对来源/标定、目标练习、装备推荐与报告导出。", "模拟/设备声明/未验证来源逐点保留；无比例只给px/s，界面场地只是画面轨迹示意。器材推荐维持预算约束与来源标注。"]],
      ["项目阶段", "在线会话在当前页面内存运行，不跨设备实时同步。浏览器视频最多60秒/50MiB、720p/10Hz采样；共用原候选点算法，不代表专业高速测速。服务版保留WebSocket同步。"],
      ["验证与企业条件", "89 Python 测试、两项资源回退测试及三组浏览器流程覆盖权限、广播、统计、回放、取消与导出。企业使用仍需真实测速真值和误差验证、设备身份、租户隔离、持久化、共享消息总线与运行监控。"]
    ], demo: "https://5503gj.github.io/shuttlekit/", url: "https://github.com/5503gj/shuttlekit", source: "依据仓库 README、speed_api.py 与 equipment_kb/ai_advisor.py，核对于 2026-10-25。"
  },
  photo: {
    title: "FORM · 影像风格工坊", tag: "Python / OpenCV / Gradio / Style Director",
    sections: [
      ["新流程", "读取真实亮度、边缘密度和主色，按用途生成三种风格试片；点击切换、前后拖动或键盘对比，参数可继续微调。"],
      ["可复现交付", ["导出三张PNG、原图轮廓SVG与ZIP参数清单，保留源图摘要、真实参数与工具耗时。", "两版都限制10MiB / 1200万像素；在线版在Worker内计算，服务版另有单任务队列与两层临时缓存清理。", "36 Python 测试、两项资源回退测试与服务/在线浏览器完整流程覆盖算法、真实接口、ZIP、缓存、方案切换、下载和手机布局。"]],
      ["实现边界", "在线版通过WebAssembly实际执行原Python/OpenCV算法，照片不上传；首次引擎约28MB，随后缓存。SVG是轮廓提取。另保留Gradio服务版，其远程访问会上传到服务器；企业采用仍需真实盲评与运行保障。"]
    ], demo: "https://5503gj.github.io/photo-style-gallery/", url: "https://github.com/5503gj/photo-style-gallery", source: "依据仓库 README、lineart_core.py 与 test_lineart.py，核对于 2026-10-25。"
  },
  study: {
    title: "Study Pilot · 七日学习规划", tag: "React / TypeScript / 本地规则工具",
    sections: [
      ["完整流程", "读取学习时长和未掌握错题，诊断薄弱方向，按每日时间预算、学习天数及三种策略生成七日计划。预览勾选后明确确认，才原子加入每日任务；重复确认不重复新增。"],
      ["日常功能", ["复习队列可将已掌握错题归档，计划可导出标准ICS日历。", "Ctrl/⌘K导航、桌面侧栏、手机抽屉、浅深主题及减少动态效果。", "35项单元与7项浏览器测试覆盖预算、存储配额失败、并发写入、重复确认、日历下载与响应式交互。"]],
      ["边界", "数据保存在当前浏览器，本地空间不等于企业账号认证；默认规划是确定性排程。云端同步、团队权限、服务端模型密钥代理、恢复演练与真实学习效果评测仍需建设。"]
    ], url:"https://github.com/5503gj/kaogong-study-admin", source:"依据已提交代码、测试及成功CI，核对于2026-10-25。"
  }
};
const dialog = document.querySelector("#project-dialog");
const content = document.querySelector("#dialog-content");
let trigger = null;
const node = (tag, text, className) => { const el = document.createElement(tag); el.textContent = text; if (className) el.className = className; return el; };
document.querySelectorAll("[data-detail]").forEach(button => button.addEventListener("click", () => {
  const project = projects[button.dataset.detail];
  if (!project) return;
  trigger = button;
  content.replaceChildren();
  content.append(node("p", project.tag, "dialog-tag"));
  const title = node("h2", project.title); title.id = "dialog-title"; content.append(title);
  project.sections.forEach(([heading, body]) => {
    content.append(node("h3", heading));
    if (Array.isArray(body)) { const list = document.createElement("ul"); body.forEach(t => list.append(node("li", t))); content.append(list); }
    else content.append(node("p", body));
  });
  if (project.demo) { const a = node("a", "直接在线体验 ↗", "dialog-link experience-link"); a.href = project.demo; a.target="_blank";a.rel="noopener noreferrer";content.append(a); }
  if (project.url) { const a = node("a", "在 GitHub 查看源码 ↗", "dialog-link"); a.href = project.url; a.target = "_blank"; a.rel = "noopener noreferrer"; content.append(a); }
  content.append(node("p", project.source, "source-note"));
  dialog.showModal(); dialog.scrollTop = 0; document.body.classList.add("modal-open");
}));
document.querySelector(".close-button").addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => { document.body.classList.remove("modal-open"); trigger?.focus(); });
dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll("[data-filter]").forEach(b => { b.classList.toggle("active", b === button); b.setAttribute("aria-pressed", String(b === button)); });
  let count = 0;
  document.querySelectorAll("[data-category]").forEach(project => {
    project.hidden = button.dataset.filter !== "all" && !project.dataset.category.split(" ").includes(button.dataset.filter);
    if (!project.hidden) count++;
  });
  document.querySelector("#result-count").textContent = `${count} 个项目`;
}));
