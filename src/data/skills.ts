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
  { name: 'LLM Orchestration', icon: '🧠', category: 'framework' },
  { name: 'RAG & Embeddings', icon: '🔗', category: 'framework' },
  { name: 'Prompt Engineering', icon: '✍️', category: 'framework' },
  { name: 'Robot Framework', icon: '🤖', category: 'testing' },
  { name: 'JaCoCo / LCOV', icon: '📊', category: 'testing' },
  { name: 'Jenkins CI/CD', icon: '🔧', category: 'infra' },
  { name: 'Kubernetes / Docker', icon: '🐳', category: 'infra' },
  { name: 'Git / GitHub', icon: '📂', category: 'infra' },
  { name: 'MySQL / MongoDB', icon: '🗄️', category: 'infra' },
];

export const interests: Interest[] = [
  {
    name: { en: 'AI-Native Engineering', zh: 'AI 原生工程' },
    icon: '🤖',
    description: {
      en: 'Building enterprise AI platforms with multi-LLM orchestration, agent memory systems, RAG pipelines, and AI-assisted development workflows',
      zh: '构建企业 AI 平台，涵盖多 LLM 编排、智能体记忆系统、RAG 流水线和 AI 辅助开发工作流',
    },
  },
  {
    name: { en: 'Platform Architecture', zh: '平台架构' },
    icon: '🏗️',
    description: {
      en: 'Cross-BU platform integration, service boundary design, API contracts, event-driven workflows, and distributed systems on Kubernetes',
      zh: '跨业务单元平台集成、服务边界设计、API 契约、事件驱动工作流与 Kubernetes 上的分布式系统',
    },
  },
  {
    name: { en: 'Chaos Engineering', zh: '混沌工程' },
    icon: '🌪️',
    description: {
      en: 'Systematic fault injection on K8s clusters — node failure, slow disk, cascading failures — with SLO-driven recovery benchmarks',
      zh: 'K8s 集群系统化故障注入 — 节点故障、慢盘、级联失败 — 配合 SLO 驱动的恢复基准',
    },
  },
  {
    name: { en: 'Full-Stack Product Delivery', zh: '全栈产品交付' },
    icon: '🚀',
    description: {
      en: 'End-to-end product ownership from domain modeling to consumer-facing delivery — WeChat Mini Programs, CLI tools, and hardware integrations',
      zh: '从领域建模到面向消费者的产品交付 — 微信小程序、CLI 工具和硬件集成的端到端产品负责',
    },
  },
];
