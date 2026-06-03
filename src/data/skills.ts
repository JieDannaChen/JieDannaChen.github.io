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
      zh: '设计具备工具调用、持久化向量记忆、智能任务路由和多模型编排的自主 Agent 系统 — 已在企业规模部署（87 技能、200+ 用户）',
    },
  },
  {
    name: { en: 'Agent-Based Testing', zh: 'Agent 驱动测试' },
    icon: '🧪',
    description: {
      en: 'Building self-directed testing agents with autonomous plan-execute-observe loops, coverage-driven test generation, and intelligent termination strategies',
      zh: '构建自驱动测试 Agent，具备自主「规划-执行-观察」闭环、覆盖率驱动测试生成和智能终止策略',
    },
  },
  {
    name: { en: 'Platform Architecture', zh: '平台架构' },
    icon: '🏗️',
    description: {
      en: 'Cross-BU platform integration (8 BUs), service boundary design, API contracts, event-driven workflows, and distributed systems on Kubernetes',
      zh: '跨业务单元平台集成（8 个 BU）、服务边界设计、API 契约、事件驱动工作流与 Kubernetes 分布式系统',
    },
  },
  {
    name: { en: 'Chaos Engineering', zh: '混沌工程' },
    icon: '🌪️',
    description: {
      en: 'Systematic fault injection on K8s clusters — node failure, slow disk, cascading failures — with SLO-driven recovery benchmarks and quantified resilience metrics',
      zh: 'K8s 集群系统化故障注入 — 节点故障、慢盘、级联失败 — 配合 SLO 驱动恢复基准与量化韧性指标',
    },
  },
];
