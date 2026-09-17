export interface Skill {
  name: string;
  icon: string;
  category: 'ai' | 'language' | 'framework' | 'testing' | 'infra';
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
      en: 'Building AI-assisted workflows for coverage-driven test generation, defect triage, evidence-backed RCA, and repeatable evaluation of LLM outputs',
      zh: '构建 AI 辅助的覆盖率驱动测试生成、缺陷分诊、证据驱动 RCA 与可重复的 LLM 输出评估工作流',
    },
  },
  {
    name: { en: 'Agent Platform Architecture', zh: 'Agent 平台架构' },
    icon: '🤖',
    description: {
      en: 'Founded and architected a 96-skill enterprise agent platform using Prompt-as-Orchestrator, structured evaluation, automated guardrails, and cross-team integrations',
      zh: '从零发起并主导架构 96 技能的企业级 Agent 平台，采用 Prompt-as-Orchestrator、结构化评估、自动化门禁与跨团队系统集成',
    },
  },
  {
    name: { en: 'Cloud-Native Reliability', zh: '云原生可靠性' },
    icon: '🌪️',
    description: {
      en: 'Performance, soak, regression, and fault-injection testing for Kubernetes object storage, including Chaos Monkey testing, fault matrices, and ELK/Prometheus/Grafana-assisted RCA',
      zh: '面向 Kubernetes 对象存储开展性能、长稳、回归与故障注入测试，包括 Chaos Monkey 测试、故障矩阵及基于 ELK/Prometheus/Grafana 的 RCA',
    },
  },
  {
    name: { en: 'Quality Systems at Scale', zh: '规模化质量体系' },
    icon: '🏗️',
    description: {
      en: 'Cross-BU test strategy (8 BUs unified), CI/CD pipeline consolidation, quality gate design, and test architecture for distributed systems — building quality into process, not just into code',
      zh: '统一 8 个 BU 的测试策略、整合 CI/CD Pipeline、设计质量门禁并构建分布式系统测试架构，把质量要求落实到研发与发布流程',
    },
  },
];
