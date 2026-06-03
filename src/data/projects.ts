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
      en: 'A full-cycle AI marathon coaching assistant — from long-term periodized training plans to race-day pacing and post-race deep analysis. Integrates with COROS watches for automated data collection, AI-generated weekly plans pushed directly to the watch, and biomechanical race reviews with stride-decay modeling and multi-factor root cause analysis.',
      zh: '覆盖全马备赛全周期的 AI 教练：从长期周期化训练规划到比赛日配速、赛后深度复盘。集成 COROS 手表数据自动采集，AI 生成周训练计划一键推送到手表，支持四维生物力学分析、步幅衰减建模和多因子根因分析。',
    },
    tags: ['Python', 'AI / LLM', 'COROS API', 'WeChat Mini App', 'PDF Report'],
    github: 'https://github.com/JieDannaChen/marathon-copilot',
    image: '/images/project-marathon.svg',
    impact: {
      en: 'Weather-adaptive plans · COROS watch integration · Race-verified analysis',
      zh: '天气自适应计划 · COROS 手表集成 · 实战验证的分析系统',
    },
  },
  {
    title: {
      en: 'Coverage Robot',
      zh: 'Coverage Robot — 覆盖率驱动测试生成',
    },
    description: {
      en: 'Automated test coverage analysis and Robot Framework test generation for Java projects. Parses JaCoCo/LCOV reports, identifies coverage gaps by priority (P0-P3), generates targeted E2E test cases, and runs an iterative loop: execute → collect → analyze → generate → repeat until coverage targets are met.',
      zh: '面向 Java 项目的自动化测试覆盖率分析与 Robot Framework 测试生成工具。解析 JaCoCo/LCOV 报告，按优先级（P0-P3）识别覆盖率缺口，生成定向 E2E 测试用例，并运行迭代闭环：执行 → 收集 → 分析 → 生成 → 重复，直到达成覆盖率目标。',
    },
    tags: ['Python', 'JaCoCo', 'Robot Framework', 'Jenkins', 'CI/CD'],
    github: 'https://github.com/JieDannaChen/cov2robot',
    image: '/images/project-coverage.svg',
    impact: {
      en: 'Iterative coverage loop · PR-targeted analysis · Jenkins integration',
      zh: '迭代覆盖率闭环 · PR 定向分析 · Jenkins 集成',
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
