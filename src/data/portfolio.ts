import type { Experience, Project, SkillGroup } from '../types/portfolio'

export const profile = {
  name: '班一博',
  romanizedName: 'Yibo Ban',
  github: 'https://github.com/yiboban',
  email: '17550611968@163.com',
  role: 'AI Engineer & Builder',
  identity: '西安交通大学软件工程硕士拟入学',
  intro:
    '关注 PyTorch、Transformer 与强化学习，把复杂算法实现为可运行、可验证、可持续迭代的工程系统。',
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'pytorch',
    index: '01',
    title: 'PyTorch 与训练诊断',
    summary: '从自动微分与 Hook 到 optimizer、梯度和参数更新，围绕真实训练故障建立可复现证据。',
    technologies: ['PyTorch', 'Autograd', 'Hooks', 'Numerical Stability'],
    evidence: [
      'TrainMedic：forward、gradient、optimizer、update、mode 五类诊断',
      '嵌套输出 NaN/Inf 定位与确定性采样更新检测',
    ],
  },
  {
    id: 'transformer',
    index: '02',
    title: 'Transformer 与大模型',
    summary: '理解 Attention、RoPE、RMSNorm、SwiGLU 与 LoRA，并将组件拆解为可测试的学习路径。',
    technologies: ['Attention', 'RoPE', 'SwiGLU', 'LoRA'],
    evidence: [
      'MyTransformer：A00-A07 七阶段本地作业与评分器',
      'DLCode：覆盖 Attention、Transformer 与大模型组件的可运行题目',
    ],
  },
  {
    id: 'rl',
    index: '03',
    title: '强化学习与生成模型',
    summary: '围绕 GRPO 的轨迹采样、概率回放、奖励建模、KL 约束与参数高效微调开展端到端实践。',
    technologies: ['GRPO', 'Trajectory Replay', 'Reward Modeling', 'KL Regularization'],
    evidence: [
      '抗体结构生成模型：打通 rollout、reward、policy update 与评估',
      'score model 关键 attention projection 注入 LoRA',
    ],
  },
  {
    id: 'fullstack',
    index: '04',
    title: 'AI 工具与全栈工程',
    summary: '把算法内容包装成清晰可用的产品界面，并处理数据、API、持久化和本地执行边界。',
    technologies: ['FastAPI', 'React', 'TypeScript', 'SQLAlchemy'],
    evidence: [
      'DLCode：前后端、Monaco Editor、SQLite 与本地判题闭环',
      '独立子进程、超时控制、输出截断与多类型递归比较',
    ],
  },
  {
    id: 'quality',
    index: '05',
    title: '测试、评估与交付',
    summary: '重视测试契约、类型检查与持续集成，用可追溯的验证结果约束工程质量。',
    technologies: ['pytest', 'GitHub Actions', 'ruff', 'mypy'],
    evidence: [
      'TrainMedic：Python 3.10/3.11/3.12 CPU CI',
      'MyTransformer：fixture、差分测试、metamorphic invariant 与分阶段评分',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'trainmedic',
    number: '01',
    name: 'TrainMedic',
    eyebrow: 'Evidence-first training diagnostics',
    statement: '让 PyTorch 训练故障留下证据。',
    problem:
      '训练“没有正常学习”时，症状通常散落在 forward、梯度、optimizer、参数更新与 train/eval 模式之间，定位成本高且容易依赖猜测。',
    role:
      '独立设计统一的 Diagnostic / Evidence / Severity 数据结构、稳定诊断码与五类诊断模块；工具只观察和解释，不自动修改训练行为。',
    highlights: [
      '定位嵌套输出中的首个 NaN / Inf 观测点',
      '跟踪 grad=None、全局梯度范数与动态学习率参数组',
      '通过 Hook、context manager 与分层规则降低接入成本',
      'Python 3.10-3.12 + CPU PyTorch CI 持续验证',
    ],
    stack: ['Python', 'PyTorch', 'pytest', 'mypy', 'GitHub Actions'],
    status: 'Alpha · 核心诊断功能可用',
    repository: 'https://github.com/yiboban/TrainMedic',
    image: '/images/trainmedic.webp',
    imageAlt: 'TrainMedic 结构化诊断结果图：问题对象、观察证据、可能原因和排查建议',
    tone: 'dark',
  },
  {
    id: 'dlcode',
    number: '02',
    name: 'DLCode',
    eyebrow: 'Local deep-learning judge',
    statement: '把深度学习手撕题，变成可运行、可提交的本地练习系统。',
    problem:
      '机器学习面试题常停留在零散文档与静态答案，缺少真实编码、隐藏测试、错误反馈和可回看的练习闭环。',
    role:
      '独立搭建 React/TypeScript 前端、FastAPI/SQLAlchemy 后端与 Python 子进程判题器，完成题库、编辑器、测试、提交记录和草稿恢复。',
    highlights: [
      '92 道可运行题目，76 道含结构化 LaTeX 说明',
      '每题 3 个公开测试与 5 个隐藏测试',
      '递归比较数值、容器、NumPy array 与 PyTorch Tensor',
      '区分答案、语法、运行、超时等判题状态',
    ],
    stack: ['React', 'TypeScript', 'FastAPI', 'SQLite', 'PyTorch'],
    status: 'Active · 本地运行',
    repository: 'https://github.com/yiboban/DLCode',
    image: '/images/dlcode.webp',
    imageAlt: 'DLCode 题目详情与 Monaco 代码编辑器真实运行界面',
    tone: 'light',
  },
  {
    id: 'mytransformer',
    number: '03',
    name: 'MyTransformer',
    eyebrow: 'Test-driven learning scaffold',
    statement: '从 byte-level BPE 到 Decoder-only LM 的七阶段实现路径。',
    problem:
      '从零实现 Transformer 时，张量形状、数学契约与错误定位很容易被完整答案掩盖；学习者需要小接口、明确测试与渐进反馈。',
    role:
      '设计 A00-A07 学习路径、薄 adapter、分阶段中文评分器与测试契约；有意保留核心 TODO，避免把作业仓库变成答案仓库。',
    highlights: [
      '覆盖 BPE、RoPE、causal attention、SwiGLU、pre-norm block 与 LM',
      '测试组合手工样例、公式、PyTorch 差分、golden fixture 与不变量',
      '100 分分阶段评分与针对失败原因的中文提示',
      '框架验证记录：61 项 student tests 可由合规参考实现通过',
    ],
    stack: ['Python', 'PyTorch', 'pytest', 'uv', 'GitHub Actions'],
    status: 'Scaffold · 核心 TODO 按设计保留',
    repository: 'https://github.com/yiboban/MyTransformer',
    image: '/images/mytransformer.svg',
    imageAlt: 'MyTransformer 从张量约定到语言模型的七阶段学习路径示意图',
    tone: 'blue',
  },
]

export const experiences: Experience[] = [
  {
    period: '2026.01 — 2026.05',
    organization: '百图生科智能技术有限公司',
    role: '强化学习实习生',
    summary:
      '面向抗体结构生成模型 xTrimoProtGen，完成 GRPO 训练入口、轨迹 log probability 回放、奖励接入、LoRA 微调与评估工具链。',
    result:
      '通过 ProcessPool 并行批量结构解析与奖励计算，整体训练/评估吞吐提升约 20 倍；简历记录 developability liability 提升 15.6%，PFM yield prediction 提升 30%。',
  },
  {
    period: '2026.09 — 2029.06',
    organization: '西安交通大学 · 电信学部',
    role: '软件工程硕士（拟入学）',
    summary: '以本科专业第二名成绩保研。',
  },
  {
    period: '2022.09 — 2026.06',
    organization: '吉林大学 · 计算机科学与技术学院',
    role: '物联网工程学士',
    summary: '专业排名 2/52，均分 91/100，GPA 3.64/4。',
  },
]

export const honors = [
  '国家励志奖学金（2 次）',
  '全国大学生数学建模竞赛省一等奖',
  '美国大学生数学建模竞赛（MCM/ICM）H 奖',
  '蓝桥杯 Python 省二等奖',
  '“挑战杯”全国大学生课外学术科技作品竞赛国家三等奖',
]
