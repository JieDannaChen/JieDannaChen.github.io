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
      zh: 'Marathon Copilot — AI 马拉松教练',
    },
    description: {
      en: 'Full-stack AI coaching platform covering the entire marathon lifecycle. 1,825-line core algorithm library implementing Jack Daniels\' VDOT, Du Bois BSA correction, and multi-factor PB probability estimation. Orchestrates 3 LLM providers (DeepSeek, Kimi, OpenAI) for context-aware coaching. WeChat Mini Program (7 pages + 6 cloud functions) for consumers; Python CLI for power users. Bidirectional COROS watch sync (1,509-line API client): fetch activity/HRV data → generate plans → push to device. Includes 5-phase menstrual cycle model for female athletes and post-race 4D biomechanical root-cause analysis.',
      zh: '覆盖马拉松全生命周期的全栈 AI 教练平台。1,825 行核心算法库实现 Jack Daniels VDOT 公式、Du Bois BSA 体表面积修正和多因子 PB 概率精算。编排 3 个 LLM（DeepSeek、Kimi、OpenAI）提供情境感知教练指导。微信小程序（7 页面 + 6 个云函数）面向普通用户；Python CLI 面向高级用户。COROS 手表双向同步（1,509 行 API 客户端）：拉取活动/HRV 数据 → 生成计划 → 推送到手表。含女性运动员 5 相位生理周期模型和赛后四维生物力学根因分析。',
    },
    tags: ['Python', 'LLM Orchestration', 'COROS API', 'WeChat Mini App', 'Sports Science'],
    github: 'https://github.com/JieDannaChen/marathon-copilot',
    image: '/images/project-marathon.svg',
    impact: {
      en: '3 LLM providers · 1,825-line algo library · WeChat + CLI + Watch',
      zh: '3 个 LLM 编排 · 1,825 行算法库 · 小程序 + CLI + 手表',
    },
  },
  {
    title: {
      en: 'Coverage Robot',
      zh: 'Coverage Robot — 覆盖率驱动测试生成',
    },
    description: {
      en: 'AI-powered tool that parses JaCoCo/LCOV code coverage reports and generates prioritized Robot Framework E2E test cases — reducing analysis time by 95%. Unified parsers for 3 coverage formats with auto-detection, regex-based Java method signature mapping, and severity classification (P0-P3). Runs an iterative closed loop: execute → collect → analyze → generate → repeat until target coverage is met. Supports Jenkins pipeline integration and PR-targeted analysis via GitHub Enterprise API.',
      zh: 'AI 驱动的工具，解析 JaCoCo/LCOV 代码覆盖率报告并生成按优先级排序的 Robot Framework E2E 测试用例 — 分析时间减少 95%。统一解析 3 种覆盖率格式并自动检测，基于正则的 Java 方法签名映射，严重度分级（P0-P3）。运行迭代闭环：执行 → 收集 → 分析 → 生成 → 重复，直到达成目标覆盖率。支持 Jenkins 流水线集成和基于 GitHub Enterprise API 的 PR 定向分析。',
    },
    tags: ['Python', 'JaCoCo', 'Robot Framework', 'Jenkins', 'AI Test Gen'],
    github: 'https://github.com/JieDannaChen/cov2robot',
    image: '/images/project-coverage.svg',
    impact: {
      en: '95% faster analysis · Iterative coverage loop · 3 report formats',
      zh: '分析提速 95% · 迭代覆盖率闭环 · 支持 3 种报告格式',
    },
  },
  {
    title: {
      en: 'AI Job Hunter',
      zh: 'AI Job Hunter — 智能求职助手',
    },
    description: {
      en: 'An end-to-end AI job hunting skill for Devin CLI and compatible AI assistants. Four-phase pipeline: resume analysis & optimization, multi-dimensional job search with 6-factor fit scoring, persona-based per-role resume tailoring (with internal info sanitization), and comprehensive interview preparation with STAR stories and system design scenarios.',
      zh: '面向 Devin CLI 及兼容 AI 助手的端到端智能求职技能。四阶段流水线：简历分析与优化、多维度职位搜索与 6 因子匹配评分、基于角色画像的简历定制（自动脱敏内部信息），以及包含 STAR 行为故事和系统设计场景的全面面试准备。',
    },
    tags: ['Python', 'AI Skill', 'Devin CLI', 'Resume Gen', 'Bilingual'],
    github: 'https://github.com/JieDannaChen/ai-job-hunter',
    image: '/images/project-jobhunter.svg',
    impact: {
      en: '6-factor fit scoring · Persona-based reframing · 800+ line interview guides',
      zh: '6 因子匹配评分 · 角色画像重塑 · 800+ 行面试指南',
    },
  },
  {
    title: {
      en: 'Alpha Agents',
      zh: 'Alpha Agents — AI 智能体框架',
    },
    description: {
      en: 'A multi-agent AI framework for building autonomous, collaborative agent systems. Designed for orchestrating complex workflows with task decomposition, tool integration, and self-reflection capabilities. (Coming soon)',
      zh: '多智能体 AI 框架，用于构建自主协作的智能体系统。支持复杂工作流编排、任务分解、工具集成和自我反思能力。（即将开源）',
    },
    tags: ['Python', 'AI Agents', 'LLM', 'Multi-Agent', 'Orchestration'],
    github: 'https://github.com/JieDannaChen/alpha-agents',
    image: '/images/project-agents.svg',
  },
];
