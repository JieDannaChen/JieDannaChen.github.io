export interface Skill {
  name: string;
  icon: string;
  category: 'language' | 'framework' | 'testing' | 'infra';
}

export interface Interest {
  name: { en: string; zh: string };
  icon: string;
  description: { en: string; zh: string };
}

export const skills: Skill[] = [
  { name: 'Python', icon: '🐍', category: 'language' },
  { name: 'Java', icon: '☕', category: 'language' },
  { name: 'JavaScript / Node.js', icon: '🟨', category: 'language' },
  { name: 'SQL', icon: '🗃️', category: 'language' },
  { name: 'Shell / Bash', icon: '💻', category: 'language' },
  { name: 'Multi-LLM Orchestration', icon: '🧠', category: 'framework' },
  { name: 'Agent Memory (RAG)', icon: '🔗', category: 'framework' },
  { name: 'Prompt Engineering', icon: '✍️', category: 'framework' },
  { name: 'Tool-Use / Function Calling', icon: '🔌', category: 'framework' },
  { name: 'Robot Framework', icon: '🤖', category: 'testing' },
  { name: 'JaCoCo / LCOV', icon: '📊', category: 'testing' },
  { name: 'Jenkins CI/CD', icon: '🔧', category: 'infra' },
  { name: 'Kubernetes / Docker', icon: '🐳', category: 'infra' },
  { name: 'Git / GitHub', icon: '📂', category: 'infra' },
];

export const interests: Interest[] = [
  {
    name: { en: 'AI Quality Engineering', zh: 'AI 质量工程' },
    icon: '🧪',
    description: {
      en: 'Building AI-powered testing agents, LLM output quality evaluation frameworks, and flaky-test diagnosis systems — making AI a force multiplier for quality, not a source of new problems',
      zh: '构建 AI 驱动的测试 Agent、LLM 输出质量评测框架、不稳定测试诊断系统 — 让 AI 成为质量的放大器，而不是新问题的来源',
    },
  },
  {
    name: { en: 'Agent Platform Architecture', zh: 'Agent 平台架构' },
    icon: '🤖',
    description: {
      en: 'Founded and architected a 96-skill enterprise agent platform with the Prompt-as-Orchestrator approach. 3-tier skill model, 4 invocation patterns, constitutional governance, cross-team adoption',
      zh: '发起并架构设计 96 技能的企业级 Agent 平台，独创 Prompt-as-Orchestrator 架构。三层技能模型、四种调用模式、宪法式治理、跨团队落地',
    },
  },
  {
    name: { en: 'Cloud-Native Reliability', zh: '云原生可靠性' },
    icon: '🌪️',
    description: {
      en: 'Systematic fault injection and chaos engineering on Kubernetes — 5 failure modes, fault-injection matrices, protocol-level root cause analysis, ELK/Prometheus observability stacks',
      zh: 'Kubernetes 上系统化故障注入和混沌工程 — 5 类故障模式、故障注入矩阵、协议级根因分析、ELK/Prometheus 全栈可观测性',
    },
  },
  {
    name: { en: 'Quality Systems at Scale', zh: '规模化质量体系' },
    icon: '🏗️',
    description: {
      en: 'Cross-BU test strategy (8 BUs unified), CI/CD pipeline consolidation, quality gate design, and test architecture for distributed systems — building quality into process, not just into code',
      zh: '跨 BU 测试策略统一（8 个业务线）、CI/CD 流水线整合、质量门禁设计、分布式系统测试架构 — 质量不只是写进代码里，更是建进流程里',
    },
  },
];
