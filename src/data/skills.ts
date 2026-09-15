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
  { name: 'Agent Architecture', icon: '🤖', category: 'ai' },
  { name: 'LLM Evaluation', icon: '🧠', category: 'ai' },
  { name: 'Prompt-as-Orchestrator', icon: '🧩', category: 'ai' },
  { name: 'RAG / Vector Memory', icon: '🔗', category: 'ai' },
  { name: 'AI Test Generation', icon: '⚡', category: 'ai' },
  { name: 'Multi-LLM Routing', icon: '🔀', category: 'ai' },
  { name: 'Python', icon: '🐍', category: 'language' },
  { name: 'Java', icon: '☕', category: 'language' },
  { name: 'JavaScript / Node.js', icon: '🟨', category: 'language' },
  { name: 'SQL', icon: '🗃️', category: 'language' },
  { name: 'Shell / Bash', icon: '💻', category: 'language' },
  { name: 'Chaos Engineering', icon: '🌪️', category: 'testing' },
  { name: 'Flaky Test Diagnosis', icon: '🔍', category: 'testing' },
  { name: 'Robot Framework', icon: '🤖', category: 'testing' },
  { name: 'JaCoCo / LCOV', icon: '📊', category: 'testing' },
  { name: 'Kubernetes / Docker', icon: '🐳', category: 'infra' },
  { name: 'Jenkins CI/CD', icon: '🔧', category: 'infra' },
  { name: 'ELK / Prometheus', icon: '📈', category: 'infra' },
  { name: 'Git / GitHub', icon: '📂', category: 'infra' },
];

export const interests: Interest[] = [
  {
    name: { en: 'AI Quality Engineering', zh: 'AI 质量工程' },
    icon: '🧪',
    description: {
      en: 'Building AI-powered testing agents, LLM output quality evaluation frameworks, and flaky-test diagnosis systems — making AI a force multiplier for quality, not a source of new problems',
      zh: '做 AI 驱动的测试 Agent、LLM 输出质量评测框架、不稳定测试诊断系统——目标是让 AI 成为质量的放大器，而不是新问题的制造者',
    },
  },
  {
    name: { en: 'Agent Platform Architecture', zh: 'Agent 平台架构' },
    icon: '🤖',
    description: {
      en: 'Founded and architected a 96-skill enterprise agent platform with the Prompt-as-Orchestrator approach. 3-tier skill model, 4 invocation patterns, constitutional governance, cross-team adoption',
      zh: '从零发起并主导架构了 96 技能的企业级 Agent 平台，自创 Prompt-as-Orchestrator 编排思路：三层技能模型、四种调用模式、宪法式治理，从单点工具推到跨部门落地',
    },
  },
  {
    name: { en: 'Cloud-Native Reliability', zh: '云原生可靠性' },
    icon: '🌪️',
    description: {
      en: 'Systematic fault injection and chaos engineering on Kubernetes — 5 failure modes, fault-injection matrices, protocol-level root cause analysis, ELK/Prometheus observability stacks',
      zh: '基于 Kubernetes 的系统化故障注入与混沌工程：5 类故障模式、故障注入矩阵、协议级根因分析，搭配 ELK/Prometheus 全栈可观测性',
    },
  },
  {
    name: { en: 'Quality Systems at Scale', zh: '规模化质量体系' },
    icon: '🏗️',
    description: {
      en: 'Cross-BU test strategy (8 BUs unified), CI/CD pipeline consolidation, quality gate design, and test architecture for distributed systems — building quality into process, not just into code',
      zh: '统一 8 个业务线的测试策略、整合 CI/CD 流水线、设计质量门禁、构建分布式系统测试架构——质量不只是写进代码，更是嵌进流程',
    },
  },
];
