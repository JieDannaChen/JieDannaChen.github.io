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
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Danna Chen',
      tagline: 'Principal Engineer · AI Quality Engineering & Agent Platform Architecture',
      description:
        '15 years in quality engineering and platform architecture — from China\'s internet hyper-growth (Meituan/Dianping, Full Truck Alliance) to enterprise distributed storage at Dell Technologies. Founded and architected a 96-skill enterprise AI agent platform with the Prompt-as-Orchestrator approach, growing from a QA tool to cross-departmental adoption by 200+ engineers. Built self-directed testing agents, flaky-test diagnosis systems, and multi-model LLM evaluation frameworks. Dell VP Star Award, Global Hackathon Champion, QeCon conference speaker.',
      cta: 'Explore My Work',
    },
    skills: {
      title: 'Skills & Expertise',
      subtitle: 'AI quality engineering, agent architecture, and the tools I build with',
      technical: 'Technical Skills',
      interests: 'Areas of Exploration',
    },
    projects: {
      title: 'AI Quality Engineering & Open Source Projects',
      subtitle: 'Testing agents, LLM quality evaluation, and agent platform architecture — where AI meets quality engineering',
      viewCode: 'GitHub',
      viewDemo: 'Demo',
    },
    achievements: {
      title: 'Achievements',
      subtitle: 'Key milestones across my career journey',
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
    },
    hero: {
      greeting: '你好，我是',
      name: '陈洁 (Danna)',
      tagline: '首席工程师 · AI 质量工程与 Agent 平台架构',
      description:
        '15 年质量工程与平台架构经验，从互联网（美团点评、满帮集团）到 Dell Technologies 企业级分布式存储，一路在质量体系建设和平台架构两条线上深耕。近几年聚焦 AI 质量工程：作为发起者从零搭起 96 技能的企业级 AI Agent 平台，独创 Prompt-as-Orchestrator 架构，从 QA 工具起步发展为跨部门共用的平台，200 多名工程师日常使用。构建了自驱动测试 Agent、不稳定测试诊断系统、多模型 LLM 评测框架。Dell VP 年度之星、全球黑客松冠军、QeCon 大会演讲嘉宾。',
      cta: '看看我做了什么',
    },
    skills: {
      title: '技能树',
      subtitle: 'AI 质量工程、Agent 架构，还有平时用的技术栈',
      technical: '技术栈',
      interests: '正在探索',
    },
    projects: {
      title: 'AI 质量工程与开源项目',
      subtitle: '测试 Agent、LLM 质量评测、Agent 平台架构——当 AI 遇上质量工程',
      viewCode: 'GitHub',
      viewDemo: '演示',
    },
    achievements: {
      title: '职业履历',
      subtitle: '一路走来的关键节点',
    },
    personal: {
      title: '代码之外',
      quote: '写代码是工作，跑马拉松是修行。',
      body: '认真跑步的业余马拉松选手。Marathon Copilot 这个项目就是因为自己要训练才做的 — 把写代码的手艺和跑步的热爱放到了一起。周期化训练、比赛补给、配速策略、恢复调整、用数据一点点磨 PB，这些我不是查资料写的，是自己一公里一公里跑出来的。',
    },
    contact: {
      title: '找到我',
      subtitle: '想聊技术、聊合作，随时欢迎',
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
