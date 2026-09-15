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
      zh: 'Coverage Robot — 自己找活干的测试 Agent',
    },
    description: {
      en: 'A self-directed testing agent that autonomously improves code coverage through a plan-execute-observe cycle. Parses JaCoCo/LCOV reports (3 formats, auto-detected), reasons about coverage gaps with P0-P3 priority classification, generates targeted Robot Framework E2E tests, executes them via Jenkins, and repeats until targets are met or diminishing returns detected. Integrates SSH, Jenkins API, and GitHub Enterprise for PR-targeted analysis. Reduces human analysis time by 95%.',
      zh: '一个会自己找活干的测试 Agent。先读覆盖率报告（JaCoCo / LCOV，3 种格式自动识别），分析哪些代码没测到、按 P0-P3 排优先级，然后自动生成 Robot Framework E2E 测试用例，交由 Jenkins 执行，根据结果判断——未达标则再来一轮，直到达标或收益递减自动停止。人工分析时间省了 95%。集成 SSH、Jenkins API、GitHub，支持按 PR 维度分析。',
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
      en: 'AI Quality Kit',
      zh: 'AI Quality Kit — AI 写的代码，也要过质检',
    },
    description: {
      en: 'Quality assurance tools for AI-generated code. The Output Reviewer runs a 6-stage pipeline (content detection → intent alignment → security/completeness/performance checks → uncertainty analysis → constraint checks → structured report) against any AI output. The SAFER PR module standardizes AI-reviewer interactions with structured response prefixes (Acknowledgement/Investigation/Clarification/Concession/Alternative/Rebuttal) and pre-PR quality gates.',
      zh: '面向 AI 生成代码的质量保障工具集。Output Reviewer 运行一条 6 步管线：识别内容类型 → 比对需求意图 → 执行安全 / 完整性 / 性能检查 → 标出不确定项 → 检查项目自定义约束 → 输出结构化报告。SAFER PR 模块定义了 AI 与 Reviewer 之间的「对话协议」——确认、调查、澄清、让步、替代、反驳六种前缀，外加 PR 提交前的质量门禁。',
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
      en: 'Agent Harness',
      zh: 'Agent Harness — 让 AI 写代码也得守规矩',
    },
    description: {
      en: 'A structured framework for AI-assisted software development. 7 skills form a multi-role, governed pipeline — from vague idea to verified code — with quality gates and human checkpoints at every phase. Roles (Planner/Generator/Evaluator) are separated by contract; a machine-readable constitution prevents scope creep, unapproved changes, and missing tests. Tiered rule loading minimizes context window usage. All state lives in repo artifacts, not chat history.',
      zh: '一套为 AI 辅助开发设定治理边界的框架。7 个技能串成一条多角色流水线，从模糊需求到可验证代码，每一步都有质量关卡和人工确认点。规划、生成、评估三个角色按契约隔离，一份机器可读的「宪章」约束 AI 不擅自改、不漏测试、不偏离需求。规则按层级加载，尽量节省上下文窗口；所有状态保存在仓库文件中，不依赖聊天记录。',
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
      en: 'vLLM Benchmark',
      zh: 'vLLM Benchmark — 推理快不快，数据说了算',
    },
    description: {
      en: 'A performance regression toolkit for LLM inference serving, targeting vLLM\'s OpenAI-compatible API. Measures TTFT, TPOT, ITL percentiles (p50/p95/p99) and throughput over streaming SSE, in both sequential and concurrent modes. Every run is compared against a committed baseline; threshold breaches fail CI — baseline updates land only on main, PRs get comparison-only. A bundled mock OpenAI backend lets the full pipeline run end-to-end without a GPU, plus A/B config comparison across batch sizes and serving setups.',
      zh: '面向大模型推理服务的性能回归工具，对接 vLLM 的 OpenAI 兼容接口。通过流式接口采集首 token 延迟、逐 token 间隔的 p50/p95/p99 和吞吐量，支持顺序与并发两种模式。每次运行与仓库内提交的基线对比，超阈值则 CI 失败——基线仅在 main 分支更新，PR 分支只做对比不覆盖。自带 mock 推理后端，无 GPU 也能跑通整条流水线，还可跨 batch size、服务配置做 A/B 对比。',
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
