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
      en: 'Agent Harness',
      zh: 'Agent Harness — AI 辅助开发治理框架',
    },
    description: {
      en: 'A structured framework for AI-assisted software development. 7 skills form a multi-role, governed pipeline — from vague idea to verified code — with quality gates and human checkpoints at every phase. Roles (Planner/Generator/Evaluator) are separated by contract; a machine-readable constitution prevents scope creep, unapproved changes, and missing tests. Tiered rule loading minimizes context window usage. All state lives in repo artifacts, not chat history.',
      zh: '面向 AI 辅助开发的结构化治理框架。7 个技能组成多角色治理流水线 — 从模糊想法到经过验证的代码 — 每个阶段都有质量门禁和人工检查点。角色（规划者/生成者/评估者）通过契约分离；机器可读的治理宪章防止范围蔓延、未授权变更和缺失测试。分层规则加载最小化上下文窗口占用。所有状态存储在仓库文件中，而非聊天记录。',
    },
    tags: ['AI Framework', 'Multi-Role', 'Governance', 'Quality Gates', 'Harness Engineering'],
    github: 'https://github.com/JieDannaChen/agent-harness',
    image: '/images/project-harness.svg',
    impact: {
      en: '7-skill pipeline · Multi-role governance · Constitution-driven AI constraints',
      zh: '7 技能流水线 · 多角色治理 · 宪章驱动的 AI 约束',
    },
  },
  {
    title: {
      en: 'AI Quality Kit',
      zh: 'AI Quality Kit — AI 代码质量工具集',
    },
    description: {
      en: 'Quality assurance tools for AI-generated code. The Output Reviewer runs a 6-stage pipeline (content detection → intent alignment → security/completeness/performance checks → uncertainty analysis → constraint checks → structured report) against any AI output. The SAFER PR module standardizes AI-reviewer interactions with structured response prefixes (Acknowledgement/Investigation/Clarification/Concession/Alternative/Rebuttal) and pre-PR quality gates.',
      zh: 'AI 生成代码的质量保障工具集。Output Reviewer 运行 6 阶段管线（内容检测 → 意图对齐 → 安全/完整性/性能检查 → 不确定性分析 → 约束检查 → 结构化报告）审查任何 AI 输出。SAFER PR 模块通过结构化响应前缀（确认/调查/澄清/让步/替代/反驳）和 PR 前置质量门禁，规范化 AI 与 Reviewer 的交互。',
    },
    tags: ['Code Review', 'SAFER Protocol', 'Quality Gates', 'Security Checks', 'AI Output'],
    github: 'https://github.com/JieDannaChen/ai-quality-kit',
    image: '/images/project-quality.svg',
    impact: {
      en: '6-stage review pipeline · SAFER response protocol · Project-specific constraints',
      zh: '6 阶段审查管线 · SAFER 响应协议 · 项目级自定义约束',
    },
  },
  {
    title: {
      en: 'Skill Kit',
      zh: 'Skill Kit — AI 技能生态管理工具',
    },
    description: {
      en: 'Management tools for AI skill registries. The Scorer maintains weight-based rankings (avg_rating + log2(usage) * 0.5) with auto-sync discovery — skills that get used more and rated higher naturally rise in priority. The Duplicate Checker uses description similarity (40%) + content cosine similarity (60%) to detect overlapping skills, with smart parent-child exclusion. Zero external dependencies.',
      zh: 'AI 技能注册表的管理工具。Scorer 维护基于权重的排名（avg_rating + log2(usage) * 0.5），自动同步发现新技能 — 使用频率越高、评分越高的技能自然排名上升。Duplicate Checker 使用描述相似度（40%）+ 内容余弦相似度（60%）检测重叠技能，智能排除父子技能对。零外部依赖。',
    },
    tags: ['Skill Management', 'Ranking', 'Deduplication', 'Zero Dependencies', 'CLI'],
    github: 'https://github.com/JieDannaChen/skill-kit',
    image: '/images/project-skillkit.svg',
    impact: {
      en: 'Weight-based ranking · Similarity detection · Auto-sync discovery',
      zh: '基于权重排名 · 相似度检测 · 自动同步发现',
    },
  },
  {
    title: {
      en: 'Marathon Copilot',
      zh: 'Marathon Copilot — 多 Agent 马拉松教练',
    },
    description: {
      en: 'A multi-agent AI coaching platform with context-aware model routing across 3 LLM providers (DeepSeek, Kimi, OpenAI). Each coaching domain is a modular agent skill (7 skills) with YAML-driven configuration and shared state. The agent pipeline autonomously orchestrates: COROS watch data ingestion (1,509-line API client) → domain-model reasoning (1,825-line sports science library: VDOT, BSA, HRV) → plan generation → device push — a fully autonomous observe-reason-act loop. WeChat Mini Program (7 pages + 6 cloud functions) delivers consumer-facing agent interactions.',
      zh: '多 Agent AI 教练平台，跨 3 个 LLM（DeepSeek、Kimi、OpenAI）实现上下文感知的模型路由。每个教练领域是独立的 Agent 技能模块（7 个技能），YAML 驱动配置与共享状态。Agent 流水线自主编排：COROS 手表数据采集（1,509 行 API 客户端）→ 领域模型推理（1,825 行运动科学库：VDOT、BSA、HRV）→ 计划生成 → 设备推送 — 完整的自主「观察-推理-行动」闭环。微信小程序（7 页面 + 6 云函数）交付面向消费者的 Agent 交互体验。',
    },
    tags: ['Multi-Agent', 'LLM Routing', 'Autonomous Loop', 'COROS API', 'WeChat'],
    github: 'https://github.com/JieDannaChen/marathon-copilot',
    image: '/images/project-marathon.svg',
    impact: {
      en: '3-model agent routing · 7 skill modules · Autonomous observe-reason-act',
      zh: '3 模型 Agent 路由 · 7 个技能模块 · 自主观察-推理-行动',
    },
  },
  {
    title: {
      en: 'Coverage Robot',
      zh: 'Coverage Robot — 自驱动测试 Agent',
    },
    description: {
      en: 'A self-directed testing agent that autonomously improves code coverage through a plan-execute-observe cycle. The agent parses JaCoCo/LCOV reports (3 formats, auto-detected), reasons about coverage gaps with priority classification (P0-P3), generates targeted Robot Framework E2E tests, executes them via Jenkins, and observes results — repeating until targets are met or diminishing returns detected. Integrates tool-use across SSH, Jenkins API, and GitHub Enterprise for PR-targeted analysis. Reduces human analysis time by 95%.',
      zh: '自驱动测试 Agent，通过「规划-执行-观察」循环自主提升代码覆盖率。Agent 解析 JaCoCo/LCOV 报告（3 种格式自动检测），对覆盖率缺口进行优先级推理（P0-P3），生成定向 Robot Framework E2E 测试，通过 Jenkins 执行，观察结果 — 循环往复直到达标或收益递减。跨 SSH、Jenkins API、GitHub Enterprise 的工具调用实现 PR 定向分析。人工分析时间减少 95%。',
    },
    tags: ['Testing Agent', 'Plan-Execute-Observe', 'Tool-Use', 'Jenkins', 'JaCoCo'],
    github: 'https://github.com/JieDannaChen/cov2robot',
    image: '/images/project-coverage.svg',
    impact: {
      en: 'Autonomous 5-phase loop · 95% faster · Self-terminating agent',
      zh: '自主 5 阶段闭环 · 提速 95% · 自终止 Agent',
    },
  },
  {
    title: {
      en: 'AI Job Hunter',
      zh: 'AI Job Hunter — Agent Skill 开发',
    },
    description: {
      en: 'An agent skill built for Devin CLI — extending the AI coding agent with job-hunting capabilities. Four-phase autonomous pipeline: Profile Build (resume parsing + skills matrix extraction) → Search & Match (web search tool-use + 6-factor weighted scoring) → Tailor Resume (persona-based reframing + internal info sanitization) → Interview Prep (company research + STAR story generation + system design scenarios). Each phase can run independently or as a chained agent workflow.',
      zh: '为 Devin CLI 构建的 Agent 技能 — 为 AI 编程 Agent 扩展求职能力。四阶段自主流水线：档案构建（简历解析 + 技能矩阵提取）→ 搜索匹配（网络搜索工具调用 + 6 因子加权评分）→ 简历定制（角色画像重塑 + 内部信息脱敏）→ 面试准备（公司调研 + STAR 故事生成 + 系统设计场景）。每个阶段可独立运行或作为链式 Agent 工作流执行。',
    },
    tags: ['Agent Skill', 'Devin CLI', 'Tool-Use', 'Chained Workflow', 'Bilingual'],
    github: 'https://github.com/JieDannaChen/ai-job-hunter',
    image: '/images/project-jobhunter.svg',
    impact: {
      en: '4-phase agent pipeline · 6-factor scoring · Persona-based reasoning',
      zh: '4 阶段 Agent 流水线 · 6 因子评分 · 基于画像的推理',
    },
  },
];
