const projects = {
  npc: {
    title: "AI NPC 互动实验室", tag: "LLM 应用 / 公开源码 / 原型",
    sections: [
      ["场景", "围绕角色与关系开展互动对话。模型需要根据当前对象、场景和已公开线索作答，同时保留程序对剧情状态的控制。"],
      ["公开代码中的实现", ["Python 本地服务调用 Ollama /api/chat，默认模型为 qwen2.5:latest。", "上下文组织包含人物资料、对话对象、关系规则、场景、公开线索与最近 8 条历史消息；不同页面的角色与场景对齐仍需完善。", "通过提示约束回复长度和信息边界；服务处理超时、连接失败和空回复，前端在模型不可用时使用关系规则。"]],
      ["当前边界", "项目是本地模型接入与关系互动原型。提示约束不等于能完全消除幻觉；角色长期记忆、RAG 等仍属于后续方向，未作为已实现能力展示。"]
    ], url: "https://github.com/5503gj/mystery-npc-lab", source: "依据仓库 README 与 server.py，核对于 2026-10-25。"
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
      ["工程实现", ["FastAPI 提供会话、器材目录、推荐与视频分析接口。", "已实现 WebSocket 会话接口与网页展示原型；当前服务只回复发送端，多客户端大屏广播仍待完善。", "器材推荐包含规则匹配与可选的 LLM 顾问；无模型配置时回退为规则推荐。"]],
      ["项目阶段", "实时会话使用进程内存保存，视频分析为轻量 CV MVP。复杂机位下仍需验证与更严格的场地标定；演示数据和估算值不等于专业测量结果。"],
      ["可进一步完善", "持久化存储、权限管理、设备管理与多租户隔离属于仓库列出的后续部署工作。"]
    ], url: "https://github.com/5503gj/shuttlekit", source: "依据仓库 README、speed_api.py 与 equipment_kb/ai_advisor.py，核对于 2026-10-25。"
  },
  photo: {
    title: "Photo Style Gallery", tag: "Python / OpenCV / Gradio",
    sections: [
      ["图像处理", "项目使用 OpenCV 的图像处理流程实现线稿、素描、胶片、海报等风格，配合 Gradio 界面和可调参数。处理在本地运行。"],
      ["实现细节", ["图像核心与界面分离，包含边缘检测、平滑、颜色调整等处理。", "大图自动缩放，控制最长边尺寸。", "仓库测试覆盖各风格 RGB 输出、尺寸保持与大图尺寸上限。"]],
      ["实现边界", "当前展示的是传统图像处理工具，不将滤镜称为生成式模型训练；可选 AI 风格增强仍为后续方向。"]
    ], url: "https://github.com/5503gj/photo-style-gallery", source: "依据仓库 README、lineart_core.py 与 test_lineart.py，核对于 2026-10-25。"
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
