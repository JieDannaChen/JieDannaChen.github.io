export interface Project {
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  tags: string[];
  github?: string;
  demo?: string;
  image: string;
  impact?: { en: string; zh: string };
}

export const projects: Project[] = [
  {
    title: {
      en: 'vLLM Benchmark',
      zh: 'vLLM Benchmark — 推理快不快，数据说了算',
    },
    description: {
      en: 'A performance regression toolkit for LLM inference serving, targeting vLLM\'s OpenAI-compatible API. Measures TTFT, TPOT, ITL percentiles (p50/p95/p99) and throughput over streaming SSE, in both sequential and concurrent modes. Every run is compared against a committed baseline; threshold breaches fail CI — baseline updates land only on main, PRs get comparison-only. A bundled mock OpenAI backend lets the full pipeline (baseline → benchmark → compare → report) run end-to-end without a GPU, plus A/B config comparison across batch sizes and serving setups. Also diagnosed and fixed a subtle measurement trap: requests.iter_lines() pre-buffers the socket, so tokens arrive in bursts and ITL percentiles collapse to ~0 — replaced with unbuffered http.client reads to restore true server pacing.',
      zh: '给大模型推理服务做「性能体检」的工具，对着 vLLM 的 OpenAI 兼容接口跑。通过流式接口量出首 token 延迟、逐 token 间隔的 p50/p95/p99 和吞吐量，顺序、并发两种模式都支持。每次跑完和提交在仓库里的基线比，超阈值直接把 CI 卡红 —— 基线只允许 main 分支更新，PR 光对比不覆盖。自带 mock 推理后端，没 GPU 也能把整条流水线（建基线 → 跑分 → 对比 → 出报告）走通，还能跨 batch size、服务配置做 A/B 对比。开发中揪出一个隐蔽的测量坑：requests 的 iter_lines 会预读缓冲，token 一批批到达，逐 token 间隔直接坍缩到 0 —— 换成非缓冲的 http.client 读取，才还原了服务端真实节奏。',
    },
    tags: ['LLM Inference', 'vLLM', 'Performance', 'Regression Testing', 'CI/CD'],
    github: 'https://github.com/JieDannaChen/vllm-benchmark',
    image: '/images/project-benchmark.svg',
    impact: {
      en: 'TTFT/TPOT/ITL percentiles · Regression gates · GPU-free CI',
      zh: 'TTFT/TPOT/ITL 百分位 · 回归门禁 · 没 GPU 也能跑 CI',
    },
  },
  {
    title: {
      en: 'Agent Harness',
      zh: 'Agent Harness — 让 AI 写代码也得守规矩',
    },
    description: {
      en: 'A structured framework for AI-assisted software development. 7 skills form a multi-role, governed pipeline — from vague idea to verified code — with quality gates and human checkpoints at every phase. Roles (Planner/Generator/Evaluator) are separated by contract; a machine-readable constitution prevents scope creep, unapproved changes, and missing tests. Tiered rule loading minimizes context window usage. All state lives in repo artifacts, not chat history.',
      zh: '一套给 AI 辅助开发「立规矩」的框架。7 个技能串成一条多角色流水线，从一句模糊的需求到能跑通的代码，每一步都有质量关卡和人工确认点。规划、生成、评估三个角色各管各的，一份机器可读的「宪章」管住 AI 不乱改、不漏测试、不偏离需求。规则按层级加载，尽量省上下文窗口；所有状态落在仓库文件里，不依赖聊天记录。',
    },
    tags: ['AI Framework', 'Multi-Role', 'Governance', 'Quality Gates', 'Harness Engineering'],
    github: 'https://github.com/JieDannaChen/agent-harness',
    image: '/images/project-harness.svg',
    impact: {
      en: '7-skill pipeline · Multi-role governance · Constitution-driven AI constraints',
      zh: '7 技能流水线 · 多角色治理 · 宪章约束 AI 行为',
    },
  },
  {
    title: {
      en: 'AI Quality Kit',
      zh: 'AI Quality Kit — AI 写的代码，也要过质检',
    },
    description: {
      en: 'Quality assurance tools for AI-generated code. The Output Reviewer runs a 6-stage pipeline (content detection → intent alignment → security/completeness/performance checks → uncertainty analysis → constraint checks → structured report) against any AI output. The SAFER PR module standardizes AI-reviewer interactions with structured response prefixes (Acknowledgement/Investigation/Clarification/Concession/Alternative/Rebuttal) and pre-PR quality gates.',
      zh: '专门给 AI 生成的代码做质检的工具集。Output Reviewer 跑一条 6 步管线：识别内容类型 → 比对需求意图 → 跑安全 / 完整性 / 性能规则 → 标出不确定项 → 检查项目自定义约束 → 输出结构化报告。SAFER PR 模块定义了一套 AI 和 Reviewer 之间的「对话协议」— 确认、调查、澄清、让步、替代、反驳六种前缀，外加 PR 提交前的质量门禁。',
    },
    tags: ['Code Review', 'SAFER Protocol', 'Quality Gates', 'Security Checks', 'AI Output'],
    github: 'https://github.com/JieDannaChen/ai-quality-kit',
    image: '/images/project-quality.svg',
    impact: {
      en: '6-stage review pipeline · SAFER response protocol · Project-specific constraints',
      zh: '6 步审查管线 · SAFER 对话协议 · 支持项目级自定义规则',
    },
  },
  {
    title: {
      en: 'Skill Kit',
      zh: 'Skill Kit — 技能多了，得有人管',
    },
    description: {
      en: 'Management tools for AI skill registries. The Scorer maintains weight-based rankings (avg_rating + log2(usage) * 0.5) with auto-sync discovery — skills that get used more and rated higher naturally rise in priority. The Duplicate Checker uses description similarity (40%) + content cosine similarity (60%) to detect overlapping skills, with smart parent-child exclusion. Zero external dependencies.',
      zh: '当 AI 技能越来越多，怎么知道该用哪个？Scorer 用一个简单的权重公式（评分 + 使用量的对数加成）给所有技能排序，用得多、评价好的自然往前排，新增的技能自动发现。Duplicate Checker 则帮你找出功能重叠的技能 — 用描述相似度（40%）和内容余弦相似度（60%）两个维度打分，还会智能跳过父子技能。纯标准库，零依赖。',
    },
    tags: ['Skill Management', 'Ranking', 'Deduplication', 'Zero Dependencies', 'CLI'],
    github: 'https://github.com/JieDannaChen/skill-kit',
    image: '/images/project-skillkit.svg',
    impact: {
      en: 'Weight-based ranking · Similarity detection · Auto-sync discovery',
      zh: '权重排名 · 重叠检测 · 自动发现新技能',
    },
  },
  {
    title: {
      en: 'Marathon Copilot',
      zh: 'Marathon Copilot — 用 AI 给自己当教练',
    },
    description: {
      en: 'A multi-agent AI coaching platform with context-aware model routing across 3 LLM providers (DeepSeek, Kimi, OpenAI). Each coaching domain is a modular agent skill (7 skills) with YAML-driven configuration and shared state. The agent pipeline autonomously orchestrates: COROS watch data ingestion (1,509-line API client) → domain-model reasoning (1,825-line sports science library: VDOT, BSA, HRV) → plan generation → device push — a fully autonomous observe-reason-act loop. WeChat Mini Program (7 pages + 6 cloud functions) delivers consumer-facing agent interactions.',
      zh: '自己跑马需要教练，就自己写了一个。三个大模型（DeepSeek、Kimi、OpenAI）按场景自动路由，7 个教练技能模块各管一块（配速、体能、营养等），YAML 配置 + 共享状态。整条 Agent 流水线全自动跑：从 COROS 手表拉数据（1,509 行 API 客户端）→ 运动科学模型推理（VDOT、BSA、HRV，1,825 行库）→ 生成训练计划 → 推送到设备，一个完整的「观察-推理-行动」闭环。前端是微信小程序，7 个页面 + 6 个云函数。',
    },
    tags: ['Multi-Agent', 'LLM Routing', 'Autonomous Loop', 'COROS API', 'WeChat'],
    github: 'https://github.com/JieDannaChen/marathon-copilot',
    image: '/images/project-marathon.svg',
    impact: {
      en: '3-model agent routing · 7 skill modules · Autonomous observe-reason-act',
      zh: '3 模型智能路由 · 7 个教练模块 · 全自动闭环',
    },
  },
  {
    title: {
      en: 'Coverage Robot',
      zh: 'Coverage Robot — 自己找活干的测试 Agent',
    },
    description: {
      en: 'A self-directed testing agent that autonomously improves code coverage through a plan-execute-observe cycle. The agent parses JaCoCo/LCOV reports (3 formats, auto-detected), reasons about coverage gaps with priority classification (P0-P3), generates targeted Robot Framework E2E tests, executes them via Jenkins, and observes results — repeating until targets are met or diminishing returns detected. Integrates tool-use across SSH, Jenkins API, and GitHub Enterprise for PR-targeted analysis. Reduces human analysis time by 95%.',
      zh: '一个会自己找活干的测试 Agent。先读覆盖率报告（JaCoCo / LCOV，3 种格式自动识别），分析哪些代码没测到、按 P0-P3 排优先级，然后自动生成 Robot Framework E2E 测试用例，扔给 Jenkins 跑，看结果 — 不够就再来一轮，直到达标或者收益递减自动停。SSH、Jenkins API、GitHub 都能直接调用，支持按 PR 维度分析。人工分析时间省了 95%。',
    },
    tags: ['Testing Agent', 'Plan-Execute-Observe', 'Tool-Use', 'Jenkins', 'JaCoCo'],
    github: 'https://github.com/JieDannaChen/cov2robot',
    image: '/images/project-coverage.svg',
    impact: {
      en: 'Autonomous 5-phase loop · 95% faster · Self-terminating agent',
      zh: '5 阶段自动闭环 · 省时 95% · 知道什么时候该停',
    },
  },
  {
    title: {
      en: 'AI Job Hunter',
      zh: 'AI Job Hunter — 让 Agent 帮你找工作',
    },
    description: {
      en: 'An agent skill built for Devin CLI — extending the AI coding agent with job-hunting capabilities. Four-phase autonomous pipeline: Profile Build (resume parsing + skills matrix extraction) → Search & Match (web search tool-use + 6-factor weighted scoring) → Tailor Resume (persona-based reframing + internal info sanitization) → Interview Prep (company research + STAR story generation + system design scenarios). Each phase can run independently or as a chained agent workflow.',
      zh: '给 Devin CLI 写的一个 Agent 技能，让编程 Agent 学会帮你找工作。四步流水线：先解析简历建档（提取技能矩阵）→ 联网搜岗位、6 个维度打分匹配 → 按目标岗位重写简历（换视角包装 + 自动脱敏内部信息）→ 准备面试（查公司背景、生成 STAR 故事、出系统设计题）。每一步可以单独跑，也可以串成完整工作流。',
    },
    tags: ['Agent Skill', 'Devin CLI', 'Tool-Use', 'Chained Workflow', 'Bilingual'],
    github: 'https://github.com/JieDannaChen/ai-job-hunter',
    image: '/images/project-jobhunter.svg',
    impact: {
      en: '4-phase agent pipeline · 6-factor scoring · Persona-based reasoning',
      zh: '4 步自动流水线 · 6 维度岗位匹配 · 按人设重写简历',
    },
  },
];
