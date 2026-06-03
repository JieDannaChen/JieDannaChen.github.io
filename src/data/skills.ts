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
  { name: 'Java', icon: '☕', category: 'language' },
  { name: 'Python', icon: '🐍', category: 'language' },
  { name: 'Shell / Bash', icon: '💻', category: 'language' },
  { name: 'Robot Framework', icon: '🤖', category: 'testing' },
  { name: 'JUnit', icon: '✅', category: 'testing' },
  { name: 'JaCoCo', icon: '📊', category: 'testing' },
  { name: 'SonarQube', icon: '🔍', category: 'testing' },
  { name: 'Jenkins', icon: '🔧', category: 'infra' },
  { name: 'Docker / K8s', icon: '🐳', category: 'infra' },
  { name: 'Ansible', icon: '📡', category: 'infra' },
  { name: 'Git', icon: '📂', category: 'infra' },
  { name: 'Linux', icon: '🐧', category: 'infra' },
];

export const interests: Interest[] = [
  {
    name: { en: 'Chaos Engineering', zh: '混沌工程' },
    icon: '🌪️',
    description: {
      en: 'Designing controlled fault-injection frameworks to validate system resilience and uncover hidden failure modes',
      zh: '设计可控的故障注入框架，验证系统韧性并发现隐藏的失效模式',
    },
  },
  {
    name: { en: 'AI-Augmented Testing', zh: 'AI 增强测试' },
    icon: '🧠',
    description: {
      en: 'Leveraging LLMs and AI agents to automate test generation, log analysis, and root cause diagnosis',
      zh: '利用大语言模型和 AI 智能体实现测试生成、日志分析和根因诊断的自动化',
    },
  },
  {
    name: { en: 'Distributed Storage Systems', zh: '分布式存储系统' },
    icon: '💾',
    description: {
      en: 'Deep expertise in enterprise-scale object storage — data durability, recovery, tiering, and performance optimization',
      zh: '企业级对象存储深度专长 — 数据持久性、恢复、分层存储与性能优化',
    },
  },
  {
    name: { en: 'Quality Transformation', zh: '质量转型' },
    icon: '📈',
    description: {
      en: 'Shifting left with component-level testing, coverage-driven optimization, and continuous quality feedback loops',
      zh: '通过组件级测试、覆盖率驱动优化和持续质量反馈循环推动测试左移',
    },
  },
];
