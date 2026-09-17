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
      en: 'Coverage Robot',
      zh: 'Coverage Robot — 覆盖率驱动的测试工作流',
    },
    description: {
      en: 'Reusable Python tooling for JaCoCo/LCOV analysis and coverage-driven Robot Framework workflows. It classifies gaps by P0-P3 priority, supports PR-targeted analysis and Jenkins execution, re-measures coverage iteratively, deduplicates gaps, and validates generated suites with dry-run checks and rule-based repair.',
      zh: '可复用的 Python 覆盖率测试工具，支持 JaCoCo/LCOV 分析、P0-P3 缺口排序、按 PR 分析、Robot Framework 工作流与 Jenkins 执行。通过迭代式覆盖率回采和缺口去重跟踪结果，并用 Dry-run 校验与规则修复检查生成的测试套件。',
    },
    tags: ['Coverage Analysis', 'Robot Framework', 'Jenkins', 'JaCoCo / LCOV', 'Dry-Run Validation'],
    github: 'https://github.com/JieDannaChen/cov2robot',
    image: '/images/project-coverage.svg',
    impact: {
      en: 'Coverage gap analysis · Test prioritization · Dry-run validation',
      zh: '覆盖率缺口分析 · 测试优先级 · Dry-run 校验',
    },
  },
  {
    title: {
      en: 'AI Quality Kit',
      zh: 'AI Quality Kit — AI 写的代码，也要过质检',
    },
    description: {
      en: 'Rule-based checks and structured review workflows for AI-generated code. The Output Reviewer organizes content, intent, security, completeness, uncertainty, and project-constraint checks into a six-stage report. SAFER PR adds configurable pre-PR checks, structured reviewer responses, and explicit human-review checkpoints.',
      zh: '面向 AI 生成代码的规则检查与结构化审阅工作流。Output Reviewer 将内容、意图、安全、完整性、不确定项和项目约束检查整理为六阶段报告；SAFER PR 提供可配置的 PR 前检查、结构化 Reviewer 响应及明确的人工复核环节。',
    },
    tags: ['Code Review', 'SAFER Protocol', 'PR Checks', 'Human Review', 'AI Output'],
    github: 'https://github.com/JieDannaChen/ai-quality-kit',
    image: '/images/project-quality.svg',
    impact: {
      en: '6-stage review pipeline · SAFER response protocol · Project-specific constraints',
      zh: '六阶段审阅 · SAFER 响应协议 · 项目级规则',
    },
  },
  {
    title: {
      en: 'Agent Harness',
      zh: 'Agent Harness — 让 AI 写代码也得守规矩',
    },
    description: {
      en: 'A structured framework for AI-assisted software development. Seven skills form a multi-role workflow from planning to verified code, with role contracts, quality checks, and human checkpoints. Tiered rule loading controls context usage, while repository artifacts preserve state and review evidence.',
      zh: '面向 AI 辅助开发的结构化框架。7 个技能组成从规划到代码验证的多角色工作流，通过角色契约、质量检查与人工确认点约束变更；规则分层加载以控制上下文用量，状态与审阅证据保存在仓库文件中。',
    },
    tags: ['AI Framework', 'Multi-Role', 'Governance', 'Quality Gates', 'Harness Engineering'],
    github: 'https://github.com/JieDannaChen/agent-harness',
    image: '/images/project-harness.svg',
    impact: {
      en: '7-skill workflow · Role contracts · Human checkpoints',
      zh: '7 技能工作流 · 角色契约 · 人工确认点',
    },
  },
  {
    title: {
      en: 'vLLM Benchmark',
      zh: 'vLLM Benchmark — 推理快不快，数据说了算',
    },
    description: {
      en: 'A Python performance-testing prototype for OpenAI-compatible inference endpoints. It supports sequential and concurrent workloads, baseline and configuration comparisons, structured reports, and a bundled mock backend for GPU-free CI smoke tests.',
      zh: '面向 OpenAI-compatible 推理接口的 Python 性能测试原型，支持串行与并发负载、基线与配置对比、结构化报告，并提供 Mock backend 完成无 GPU 的 CI 冒烟验证。',
    },
    tags: ['LLM Inference', 'vLLM', 'Benchmark Prototype', 'Config Comparison', 'Mock CI'],
    github: 'https://github.com/JieDannaChen/vllm-benchmark',
    image: '/images/project-benchmark.svg',
    impact: {
      en: 'Performance-testing prototype · Config comparison · GPU-free smoke tests',
      zh: '性能测试原型 · 配置对比 · 无 GPU 冒烟验证',
    },
  },
  {
    title: {
      en: 'Skill Kit',
      zh: 'Skill Kit — 技能多了，得有人管',
    },
    description: {
      en: 'Management tools for AI skill registries. The Scorer maintains weight-based rankings (avg_rating + log2(usage) * 0.5) with auto-sync discovery — skills that get used more and rated higher naturally rise in priority. The Duplicate Checker uses description similarity (40%) + content cosine similarity (60%) to detect overlapping skills, with smart parent-child exclusion. Zero external dependencies.',
      zh: 'AI 技能数量增长后，如何判断该用哪个？Scorer 用一个权重公式（评分 + 使用量的对数加成）给所有技能排序，使用多、评价好的自然优先，新增技能自动发现。Duplicate Checker 负责识别功能重叠的技能——从描述相似度（40%）和内容余弦相似度（60%）两个维度打分，并智能跳过父子技能。纯标准库，零依赖。',
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
      en: 'AI Job Hunter',
      zh: 'AI Job Hunter — 让 Agent 帮你找工作',
    },
    description: {
      en: 'An end-to-end job hunting assistant skill — persistent candidate profile, multi-agent deep JD analysis, tailored resumes (MD + DOCX), targeted cover letters, comprehensive interview guides, and spaced-repetition interview prep. Grows a dual-axis profile (knowledge + behavior) across interactions that gets richer over time. Built as a Codex skill for AI coding agents.',
      zh: '端到端求职助手技能——持久化候选人画像、多 Agent 深度 JD 分析、定制化简历（MD + DOCX）、针对性求职信、完整面试指南、间隔复习面试准备。双轴画像（知识轴 + 行为轴）随每次交互持续进化。以 Codex skill 形式构建，供 AI 编程助手调用。',
    },
    tags: ['Agent Skill', 'Multi-Agent', 'Tool-Use', 'Chained Workflow', 'Bilingual'],
    github: 'https://github.com/JieDannaChen/ai-job-hunter',
    image: '/images/project-jobhunter.svg',
    impact: {
      en: 'Dual-axis persistent profile · Multi-agent deep JD analysis · Spaced repetition prep',
      zh: '双轴持久化画像 · 多 Agent 深度 JD 分析 · 间隔复习面试准备',
    },
  },
  {
    title: {
      en: 'Marathon Copilot',
      zh: 'Marathon Copilot — 用 AI 给自己当教练',
    },
    description: {
      en: 'A multi-agent AI coaching platform with context-aware model routing across 3 LLM providers (DeepSeek, Kimi, OpenAI). Each coaching domain is a modular agent skill (7 skills) with YAML-driven configuration and shared state. The agent pipeline autonomously orchestrates: COROS watch data ingestion → domain-model reasoning (VDOT, BSA, HRV) → plan generation → device push — a fully autonomous observe-reason-act loop.',
      zh: '源于自身跑马训练需求的 AI 教练平台。三个大模型（DeepSeek、Kimi、OpenAI）按场景自动路由，7 个教练技能模块各司其职（配速、体能、营养等），YAML 配置 + 共享状态。整条 Agent 流水线全自动运行：从 COROS 手表拉取数据 → 运动科学模型推理 → 生成训练计划 → 推送到设备，构成完整的「观察-推理-行动」闭环。',
    },
    tags: ['Multi-Agent', 'LLM Routing', 'Autonomous Loop', 'COROS API'],
    github: 'https://github.com/JieDannaChen/marathon-copilot',
    image: '/images/project-marathon.svg',
    impact: {
      en: '3-model agent routing · 7 skill modules · Autonomous observe-reason-act',
      zh: '3 模型智能路由 · 7 个教练模块 · 全自动闭环',
    },
  },
];
