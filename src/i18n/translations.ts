export const languages = {
  en: 'English',
  zh: '中文',
};

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      achievements: 'Achievements',
      personal: 'Personal',
      contact: 'Contact',
      resume: 'Resume',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Danna Chen',
      tagline: 'Principal Engineer · AI Quality Engineering & Agent Platform Architecture',
      keywords: 'AI Testing  ·  Agent Architecture  ·  Cloud-Native Reliability  ·  vLLM Benchmark',
      description:
        '15 years in quality engineering and platform architecture — from China\'s internet hyper-growth (Meituan/Dianping, Full Truck Alliance) to enterprise distributed storage at Dell Technologies. Founded and architected a 96-skill enterprise AI agent platform with the Prompt-as-Orchestrator approach, growing from a QA tool to cross-departmental adoption by 200+ engineers. Built self-directed testing agents, flaky-test diagnosis systems, and multi-model LLM evaluation frameworks.',
      cta: 'Explore My Work',
      resume: 'Download Resume',
    },
    skills: {
      title: 'Skills & Expertise',
      subtitle: 'AI quality engineering, agent architecture, and the tools I build with',
      technical: 'Technical Skills',
      focus: 'Core Focus',
    },
    projects: {
      title: 'AI Quality Engineering & Open Source Projects',
      subtitle: 'Testing agents, LLM quality evaluation, and agent platform architecture — where AI meets quality engineering',
      viewCode: 'GitHub',
      viewDemo: 'Demo',
    },
    achievements: {
      title: 'Achievements',
      subtitle: 'Key milestones across 15 years of quality engineering',
    },
    personal: {
      title: 'Beyond the Code',
      quote: "I don't just build technology — I live the running lifestyle.",
      body: 'Competitive amateur marathon runner. Marathon Copilot was born from my own training needs, combining engineering skills with a deep passion for the sport. I understand the runner\'s journey from first principles: periodization, race nutrition, pacing strategy, recovery science, and the data-driven pursuit of personal bests. Every line of code in that project comes from real miles on the road.',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "Open to collaboration, speaking, and knowledge exchange",
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: {
      builtWith: 'Built with',
      and: '&',
      by: 'by Danna Chen',
    },
  },
  zh: {
    nav: {
      about: '关于',
      skills: '技能',
      projects: '项目',
      achievements: '履历',
      personal: '生活',
      contact: '联系',
      resume: '简历',
    },
    hero: {
      greeting: '你好，我是',
      name: '陈洁（Danna）',
      tagline: '首席工程师 · AI 质量工程与 Agent 平台架构',
      keywords: 'AI 测试  ·  Agent 架构  ·  云原生可靠性  ·  vLLM Benchmark',
      description:
        '15 年质量工程与平台架构经验，横跨中国互联网的高速增长期（美团点评、满帮集团）和 Dell Technologies 的企业级分布式存储。近几年专注 AI 质量工程：从零搭建一套 96 技能的企业级 Agent 平台，独创 Prompt-as-Orchestrator 编排思路，从一个 QA 工具成长为 200 多人日常依赖的跨部门平台。同时构建了自驱动测试 Agent、不稳定测试诊断系统、多模型 LLM 评测框架，覆盖 AI 在质量工作中的多个落地场景。',
      cta: '看看我做了什么',
    },
    skills: {
      title: '技能树',
      subtitle: 'AI 质量工程、Agent 平台架构，以及我日常打磨的技术栈',
      technical: '技术栈',
      focus: '核心方向',
    },
    projects: {
      title: 'AI 质量工程与开源项目',
      subtitle: '测试 Agent、LLM 质量评测、Agent 平台架构——AI 在质量工程中的实践落地',
      viewCode: 'GitHub',
      viewDemo: '演示',
    },
    achievements: {
      title: '职业履历',
      subtitle: '十五年质量工程的关键里程碑',
    },
    personal: {
      title: '代码之外',
      quote: '写代码是手艺，跑马拉松是修行。',
      body: '业余马拉松选手。Marathon Copilot 源于自身的训练需求，把工程能力与对跑步的专注结合在一起。周期化训练、比赛补给、配速策略、恢复调整，这些内容都来自真实的训练里程，再用数据驱动持续优化个人成绩。',
    },
    contact: {
      title: '找到我',
      subtitle: '欢迎聊技术、聊合作',
      email: '邮箱',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: {
      builtWith: '使用',
      and: '和',
      by: '构建 · 陈洁',
    },
  },
} as const;

export function t(lang: Lang, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value ?? key;
}
