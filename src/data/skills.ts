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
    name: { en: 'AI Agent Architecture', zh: 'AI Agent 架构' },
    icon: '🤖',
    description: {
      en: 'Designing autonomous agent systems with tool-use, persistent vector memory, intelligent task routing, and multi-model orchestration — deployed at enterprise scale (87 skills, 200+ users)',
      zh: '从零设计自主 Agent 系统 — 能调工具、有向量记忆、会智能路由任务、能编排多个大模型，已经在企业里跑起来了（87 个技能、200 多人在用）',
    },
  },
  {
    name: { en: 'Agent-Based Testing', zh: 'Agent 驱动测试' },
    icon: '🧪',
    description: {
      en: 'Building self-directed testing agents with autonomous plan-execute-observe loops, coverage-driven test generation, and intelligent termination strategies',
      zh: '让 Agent 自己做测试 — 规划要测什么、执行测试、观察结果、不够就再来一轮，能根据覆盖率自动生成用例，还知道什么时候该停',
    },
  },
  {
    name: { en: 'Platform Architecture', zh: '平台架构' },
    icon: '🏗️',
    description: {
      en: 'Cross-BU platform integration (8 BUs), service boundary design, API contracts, event-driven workflows, and distributed systems on Kubernetes',
      zh: '做过 8 个业务单元的跨团队平台集成，对服务边界划分、API 契约设计、事件驱动架构和 K8s 上的分布式系统比较有体感',
    },
  },
  {
    name: { en: 'Chaos Engineering', zh: '混沌工程' },
    icon: '🌪️',
    description: {
      en: 'Systematic fault injection on K8s clusters — node failure, slow disk, cascading failures — with SLO-driven recovery benchmarks and quantified resilience metrics',
      zh: '在 K8s 集群上系统性地搞破坏 — 模拟节点挂掉、磁盘变慢、级联故障，然后量化恢复速度，用 SLO 基准衡量系统到底有多扛得住',
    },
  },
];
