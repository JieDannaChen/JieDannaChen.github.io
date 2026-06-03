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
  {
    title: {
      en: 'Alpha Agents',
      zh: 'Alpha Agents — 多智能体协作框架',
    },
    description: {
      en: 'A multi-agent orchestration framework for building autonomous, collaborative agent systems. Features task decomposition with DAG-based dependency resolution, shared memory and message-passing between agents, tool integration registry, and self-reflection with retry strategies. Designed to power complex workflows where multiple specialized agents coordinate toward a shared goal. (Coming soon)',
      zh: '多智能体编排框架，用于构建自主协作的 Agent 系统。支持基于 DAG 的任务分解与依赖解析、Agent 间共享记忆与消息传递、工具集成注册表，以及带重试策略的自我反思机制。设计用于驱动多个专业化 Agent 协同达成共同目标的复杂工作流。（即将开源）',
    },
    tags: ['Multi-Agent', 'DAG Orchestration', 'Shared Memory', 'Tool Registry', 'Self-Reflection'],
    github: 'https://github.com/JieDannaChen/alpha-agents',
    image: '/images/project-agents.svg',
  },
];
